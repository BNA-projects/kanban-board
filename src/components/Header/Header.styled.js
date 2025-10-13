import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.header.background};
  color: ${({ theme }) => theme.header.textColor};
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 60px;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    margin-bottom: 0;
  }
`;

export const ThemeLabel = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-right: 8px;
`;

export const ThemeToggle = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.3s;
  }

  &:checked::before {
    left: 12px;
    background-color: #4a67ff;
  }
`;
