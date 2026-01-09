import Card from "../Card/Card";
import * as S from "./Column.styled";
import { useTasks } from "../../hooks/useTasks";

function Column({ title, dayId, tasks }) {
  const { deleteTask } = useTasks();
  const filteredTasks = tasks.filter((task) => task.weekday === dayId);
  const handleRemoveTask = async (id) => {
    await deleteTask(id);
  };
  return (
    <S.Column>
      <S.ColumnRow>
        <S.Title>{title}</S.Title>
        <S.Cards>
          {filteredTasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              date={task.date}
              topic={task.topic}
              title={task.title}
              onRemove={() => handleRemoveTask(task.id)}
            />
          ))}
        </S.Cards>
      </S.ColumnRow>
    </S.Column>
  );
}

export default Column;
