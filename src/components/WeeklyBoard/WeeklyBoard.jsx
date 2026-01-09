import { useState } from "react";
import * as S from "./WeeklyBoard.styled";

import PopNewTaskModal from "../../popups/PopNewTaskModal/PopNewTaskModal";
import { useTasks } from "../../hooks/useTasks";
import { WEEK_DAYS } from "../../const";
import Column from "../Column/Column";

function WeekBoard() {
  const { tasks, loading, addTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = async (title, date, topic, weekday) => {
    await addTask({
      title,
      date,
      topic,
      weekday,
    });

    setIsModalOpen(false);
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading tasks...</p>;
  }

  return (
    <S.WeeklyContainer>
      <S.Header>
        <S.Title>My Weeks Plans</S.Title>
      </S.Header>

      <S.WeeksGrid>
        {" "}
        {WEEK_DAYS.map((d) => (
          <Column key={d.id} dayId={d.id} title={d.title} tasks={tasks} />
        ))}
      </S.WeeksGrid>

      {isModalOpen && (
        <PopNewTaskModal
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      )}
    </S.WeeklyContainer>
  );
}

export default WeekBoard;
