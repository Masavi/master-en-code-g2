// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import ContextApp from './components/ContextApp';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <h1>Context API</h1>
      <ContextApp />
    </ThemeProvider>
  );
}

export default App;
