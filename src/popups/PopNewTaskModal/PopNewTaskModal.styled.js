
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 6;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 660px) {
    align-items: flex-start;
    top: 70px;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #d4dbe5;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 495px) {
    padding: 20px;
    border-radius: 0;
  }
`;

// export const ModalContent = styled.div`
//   width: 100%;

// `;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;







export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 25px;
  color: #94a6be;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;
