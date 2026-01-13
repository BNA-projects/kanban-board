import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
`;

export const ColumnRow = styled.div`
  background-color: ${({ theme }) => theme.column.background};
  border-radius: 14px;
  padding: 12px;

  border: 1px solid ${({ theme }) => theme.column.border};

  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.column.hover};
  }
`;

export const Title = styled.p`
  text-align: center;
  width: 100%;
  margin: 6px 0 9px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) =>
    theme.mode === "dark" ? "#c6d0e1" : "#94a6be"};
`;

export const Cards = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 1200px) {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 6px;
  }
`;
