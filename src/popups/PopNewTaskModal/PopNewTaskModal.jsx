import { useState } from "react";
import { Button } from "../../styles/Button.styled";
import * as S from "./PopNewTaskModal.styled";

function PopNewTaskModal({ onAddTask, onClose }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title);
    setTitle(""); // очистим поле
  };

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalContent>
          <S.Title>Create a New Task</S.Title>

          <S.Form onSubmit={handleSubmit}>
            <S.InputGroup>
              <S.Input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter a new task..."
              />
              <Button type="submit">Add Task</Button>
            </S.InputGroup>
          </S.Form>
          <S.CloseButton onClick={onClose}>✖</S.CloseButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default PopNewTaskModal;


