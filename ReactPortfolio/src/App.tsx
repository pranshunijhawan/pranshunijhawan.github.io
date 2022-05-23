import { GlobalStylesDark, GlobalStylesLight } from "./global/GlobalStyles";
import Portfolio from './Portfolio';

function App() {

  const darkTheme: boolean = true;

  return (
    <div>
      { darkTheme ? <GlobalStylesDark /> : <GlobalStylesLight /> }
      <Portfolio />
    </div>
  );
}

export default App;
