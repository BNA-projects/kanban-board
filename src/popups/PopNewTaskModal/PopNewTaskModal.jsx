import * as S from "./PopNewTaskModal.styled";
import { DatepickerFix } from "../../styles/Global.styled";
import TaskForm from "../../TaskForm/TaskForm";

function PopNewTaskModal({ onAddTask, onClose }) {
  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Title>Create a New Task</S.Title>
        <DatepickerFix />
        <TaskForm onAddTask={onAddTask} />
        <S.CloseButton onClick={onClose}>✖</S.CloseButton>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default PopNewTaskModal;
