import { useState } from "react";
import * as S from "./TaskBoard.styled";
import Card from "../Card/Card";
import { Container } from "../../styles/Global.styled";
import PopNewTaskModal from "../../popups/PopNewTaskModal/PopNewTaskModal";
import { useTasks } from "../../hooks/useTasks";

function TaskBoard() {
  const { tasks, loading, addTask, deleteTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = async (title, date, topic) => {
    await addTask({
      title,
      date,
      topic,
    });

    setIsModalOpen(false);
  };

  const handleRemoveTask = async (id) => {
    await deleteTask(id);
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading tasks...</p>;
  }

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
              topic={task.topic}
              title={task.title}
              onRemove={() => handleRemoveTask(task.id)}
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
