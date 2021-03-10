const ContextApp = (props) => {
  const { theme, toggleTheme } = props;
 
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
      }}>Context App</h2>
      <button
        onClick={toggleTheme}
        type="button"> 
        Change Theme
      </button>
    </article>
  );
}
 
export default ContextApp;