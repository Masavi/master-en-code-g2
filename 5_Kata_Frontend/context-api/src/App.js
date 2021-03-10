import { useState } from "react";

// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

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
      <article style={{
        backgroundColor: theme.backgroundColor,
        width: '500px',
        height: '300px',
        display: 'flex',
        margin: '1.5em',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{
          color: theme.color,
        }}>Context App</h2>
        <button
          onClick={toggleTheme}
          type="button"> 
          Change Theme
        </button>
      </article>
    </div>
  );
}

export default App;
