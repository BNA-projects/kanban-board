import styled from "styled-components";


export const StyledInput = styled.input`
width: 100%;
 flex: 1;
  padding: 14px;
  border: 1px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #94a6be;
  }
`;