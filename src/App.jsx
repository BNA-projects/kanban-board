import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import WeeklyBoard from "./components/WeeklyBoard/WeeklyBoard"; // сделай компонент/страницу для недель

import { TasksProvider } from "./context/TaskProvider.jsx";

import { GlobalStyle } from "./styles/Global.styled";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const tgUserId = null;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <TasksProvider tgUserId={tgUserId}>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

          <Routes>
            <Route path="/" element={<TaskBoard />} />
            <Route path="/weeks" element={<WeeklyBoard />} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </TasksProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
