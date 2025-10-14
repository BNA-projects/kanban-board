import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 130px;
    opacity: 1;
  }
`;
export const CardItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 0.5s ease;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 220px;
  height: 160px;
  background: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.card.textColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 18px;
`;

export const RemoveIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  filter: ${({ theme }) =>
    theme.name === "light" ? "invert(0) brightness(0) saturate(100%)" : ""};
  &:hover {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DateText = styled.p`
  margin-left: 6px;
  font-size: 12px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

export const Icon = styled.svg`
  width: 13px;
`;
