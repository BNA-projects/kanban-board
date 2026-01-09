import styled from "styled-components";


export const categorieColor = {
  work: {
    background: "#e0f2fe",
    color: "#0284c7",
  },
  creative: {
    background: "#fce7f3",
    color: "#db2777",
  },
  finance: {
    background: "#dcfce7",
    color: "#16a34a",
  },
  social: {
    background: "#ede9fe",
    color: "#7c3aed",
  },
  learning: {
    background: "#fff7ed",
    color: "#f97316",
  },
 home: {
    background: "#fff1c1", 
    color: "#f59e0b",
  },
  health: {
    background: "#fee2e2",
    color: "#dc2626",
  },
  grey: {
    background: "#94a6be",
    color: "#ffffff",
  },
};


export const CategorieButton = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic }) =>
    categorieColor[$topic]?.background || "#ccc"};
`;

export const CategorieText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $topic }) => categorieColor[$topic]?.color || "#000"};
`;

export const CategoriePopUpButton = styled(CategorieButton)`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  @media screen and (max-width: 495px){
   display: none;
  }
`;

export const CategoriePopUpButtonText = styled(CategorieText)`
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
`;
