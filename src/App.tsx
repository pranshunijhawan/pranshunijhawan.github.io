import { useState } from "react";
import { GlobalStylesDark, GlobalStylesLight } from "./global/GlobalStyles";
import Portfolio from './Portfolio';
import { GetTheme, SetTheme } from "./types/theme-service";

function App() {

  const setTheme = GetTheme();
  const [darkMode, setDarkMode] = useState(setTheme)

  const themeHandler = () => {
    setDarkMode(!darkMode)
    SetTheme(!darkMode)
  }

  return (
    <div>
      { darkMode ? <GlobalStylesDark /> : <GlobalStylesLight /> }
      <Portfolio themeHandler={themeHandler} isDarkModeEnabled={darkMode} />
    </div>
  );
}

export default App;
