import styled from "styled-components";

export const Column = styled.div`
  /* width: 20%;
  margin: 0 auto;
  display: block;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  } */
`;

export const ColumnRow = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;




export const Title = styled.p`
 text-align: center;
  width: 100%;
  margin-top:6px;
  margin-bottom:9px;
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
