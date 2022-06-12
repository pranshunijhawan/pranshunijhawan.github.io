import { useState } from "react";
import { GlobalStylesDark, GlobalStylesLight } from "./global/GlobalStyles";
import Portfolio from './Portfolio';

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const themeHandler = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      { darkMode ? <GlobalStylesDark /> : <GlobalStylesLight /> }
      <Portfolio themeHandler={themeHandler} />
    </div>
  );
}

export default App;
