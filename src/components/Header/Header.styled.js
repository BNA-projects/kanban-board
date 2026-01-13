import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.header.background};
  color: ${({ theme }) => theme.header.textColor};
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between; /* было flex-end */
  gap: 24px;

  @media (max-width: 600px) {
    padding: 0 16px;
    height: 64px;
  }
`;

export const HeaderLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  border-radius: 12px;

  font-size: 16px;         
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.2px;

  text-decoration: none;
  color: ${({ theme }) => theme.header.textColor};
  opacity: 0.8;

  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 1;
    background-color: rgba(74, 103, 255, 0.08);
    color: #4a67ff;
  }

  &:focus-visible {
    outline: 2px solid rgba(74, 103, 255, 0.55);
    outline-offset: 2px;
  }

  &.active {
    opacity: 1;
    color: #4a67ff;
    background-color: rgba(74, 103, 255, 0.12);
    font-weight: 600;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 7px 10px;
    border-radius: 10px;
  }
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ThemeLabel = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 600px) {
    display: none; /* чтобы не теснило на мобилке */
  }
`;

export const ThemeToggle = styled.input`
  position: relative;
  width: 34px;
  height: 18px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  appearance: none;
  cursor: pointer;

  transition: background 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.2s ease;
  }

  &:checked {
    background: rgba(74, 103, 255, 0.25);
  }

  &:checked::before {
    left: 18px;
    background-color: #4a67ff;
  }
`;
