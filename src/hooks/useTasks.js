import { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabaseClient";

export function useTasks(tgUserId = null) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const loadTasks = useCallback(async () => {
    setLoading(true);

    let query = supabase.from("tasks").select("*").order("created_at", { ascending: false });

    if (tgUserId) {
      query = query.eq("tg_user_id", tgUserId);
    }

    const { data, error } = await query;

    if (!error) setTasks(data);
    setLoading(false);
  }, [tgUserId]);

 
  const addTask = async (task) => {
    const { data, error } = await supabase.from("tasks").insert(task).select();

    if (!error && data) {
      setTasks((prev) => [data[0], ...prev]);
    }
    return { data, error };
  };


  const updateTask = async (id, fields) => {
    const { data, error } = await supabase
      .from("tasks")
      .update(fields)
      .eq("id", id)
      .select();

    if (!error && data) {
      setTasks((prev) => prev.map((t) => (t.id === id ? data[0] : t)));
    }
    return { data, error };
  };


  const deleteTask = async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (!error) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
    return { error };
  };

  useEffect(() => {
    loadTasks();

    const channel = supabase.channel("tasks-changes").on(
      "postgres_changes",
      { event: "*", schema: "public", table: "tasks" },
      (payload) => {
        if (payload.eventType === "INSERT") {
          setTasks((prev) => [payload.new, ...prev]);
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
    ).subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadTasks]);

  return {
    tasks,
    loading,
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
