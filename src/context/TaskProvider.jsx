import { useEffect, useState, useCallback, useMemo } from "react";
import { supabase } from "../supabaseClient";

import { TasksContext } from "./TaskContext";

export function TasksProvider({ tgUserId = null, children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    setLoading(true);

    let query = supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (tgUserId) {
      query = query.eq("tg_user_id", tgUserId);
    }

    const { data, error } = await query;

    if (!error && data) setTasks(data);
    setLoading(false);

    return { data, error };
  }, [tgUserId]);

  const addTask = useCallback(async (task) => {
    const { data, error } = await supabase.from("tasks").insert(task).select();

    if (!error && data && data[0]) {
      setTasks((prev) => {
        const exists = prev.some((t) => t.id === data[0].id);
        return exists ? prev : [data[0], ...prev];
      });
    }

    return { data, error };
  }, []);

  const updateTask = useCallback(async (id, fields) => {
    const { data, error } = await supabase
      .from("tasks")
      .update(fields)
      .eq("id", id)
      .select();

    if (!error && data && data[0]) {
      setTasks((prev) => prev.map((t) => (t.id === id ? data[0] : t)));
    }

    return { data, error };
  }, []);

  const deleteTask = useCallback(async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (!error) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    return { error };
  }, []);

  useEffect(() => {
    loadTasks();

    let channel = supabase
      .channel("tasks-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tasks" },
        (payload) => {
          // Если в провайдере используется tgUserId, то отсекаем чужие события
          const newRow = payload.new;
          const oldRow = payload.old;

          if (tgUserId) {
            const matchesUser =
              (newRow && newRow.tg_user_id === tgUserId) ||
              (oldRow && oldRow.tg_user_id === tgUserId);

            if (!matchesUser) return;
          }

          if (payload.eventType === "INSERT") {
            setTasks((prev) => {
              const exists = prev.some((t) => t.id === payload.new.id);
              return exists ? prev : [payload.new, ...prev];
            });
          }

          if (payload.eventType === "UPDATE") {
            setTasks((prev) =>
              prev.map((t) => (t.id === payload.new.id ? payload.new : t))
            );
          }

          if (payload.eventType === "DELETE") {
            setTasks((prev) => prev.filter((t) => t.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadTasks, tgUserId]);

  const value = useMemo(
    () => ({
      tasks,
      loading,
      loadTasks,
      addTask,
      updateTask,
      deleteTask,
    }),
    [tasks, loading, loadTasks, addTask, updateTask, deleteTask]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
