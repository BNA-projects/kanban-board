import Header from "./components/Header/Header";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useState } from "react";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <TaskBoard />
    </ThemeProvider>
  );
}

export default App;
