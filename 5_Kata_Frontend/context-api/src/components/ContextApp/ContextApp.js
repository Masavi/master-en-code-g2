import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ContextApp = () => {
  const [
    { name, lastName, theme },
    { toggleTheme }
  ] = useContext(ThemeContext);
 
  return (
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
      }}>{name} {lastName}</h2>
      <button
        onClick={toggleTheme}
        type="button"> 
        Change Theme
      </button>
    </article>
  );
}
 
export default ContextApp;