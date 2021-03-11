import { useTheme } from '../contexts/ThemeContext';

const WithTheme = (WrappedComponent) => {
  return function WithTheme(props) {
    const state = useTheme();

    return <WrappedComponent
      themeState={state}
      {...props} />
  }
}

export default WithTheme;
