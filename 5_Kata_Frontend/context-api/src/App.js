import { useState } from "react";

// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import ContextApp from './components/ContextApp';

function App() {

  const lightTheme = {
    mode: 'light',
    backgroundColor: 'white',
    color: 'black',
  }

  const darkTheme = {
    mode: 'dark',
    backgroundColor: 'black',
    color: 'white',
  }

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      return setTheme(darkTheme);
    }
    return setTheme(lightTheme);
  }

  return (
    <div>
      <h1>Context API</h1>
      <ContextApp
        theme={theme}
        toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
