import { useState, useEffect } from "react";
import * as S from "./TaskBoard.styled";
import Card from "../Card/Card";
import { Container } from "../../styles/Global.styled";
import { cardList as initialTasks } from "../../data";
import PopNewTaskModal from "../../popups/PopNewTaskModal/PopNewTaskModal";
import { getCurrentDate } from "../../utils/getCurrentDate";

function TaskBoard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (title) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      date: getCurrentDate(),
    };

    setTasks((prev) => [...prev, newTask]);
    setIsModalOpen(false);
  };

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <S.TaskListWrapper>
        <S.Header>
          <S.Title>My Tasks</S.Title>
          <S.TaskButton onClick={() => setIsModalOpen(true)}>
            Add New Task
          </S.TaskButton>
        </S.Header>

        <S.TaskGrid>
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              date={task.date}
              title={task.title}
              onRemove={handleRemoveTask}
            />
          ))}
        </S.TaskGrid>
      </S.TaskListWrapper>

      {isModalOpen && (
        <PopNewTaskModal
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      )}
    </Container>
  );
}

export default TaskBoard;
