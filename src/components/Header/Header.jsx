import * as S from "./Header.styled";

function Header({ toggleTheme, isDarkMode }) {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.ThemeSwitcher>
          <S.ThemeLabel>
            {isDarkMode ? "Light theme" : "Dark theme"}
          </S.ThemeLabel>
          <S.ThemeToggle
            type="checkbox"
            name="theme"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
        </S.ThemeSwitcher>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
