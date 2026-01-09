import styled from "styled-components";
import { Button } from "../../styles/Button.styled";
import { Container } from "../../styles/Global.styled";

export const WeeklyContainer = styled(Container)`
  max-width: 1440px;
`;



export const Header = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

export const TaskButton = styled(Button)`
  width: 178px;
  height: 30px;
  border-radius: 4px;
`;

export const WeeksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  width: 100%;
  align-items: stretch;
`;


