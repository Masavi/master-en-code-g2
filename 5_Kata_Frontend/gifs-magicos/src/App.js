import React from 'react';
import ImageCard from './components/ImageCard';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';
// 1 .- (Search) Escribir el buscador
// 2 .- (App) Pedirle la información a giphy
// 3 .- (App) Mostrar el resultado en las cards
class App extends React.Component {
  // Este método es inseguro/unsafe y ya no se ocupa
  constructor(props){
    super(props);
    this.state = {
      logo: logo
    };
  }
  componentWillMount() {
    console.log('Yo me debería ejecutar en el lugar: 0');
  } 

  componentDidMount(){
    console.log('Yo me debería ejecutar en el lugar: 2');
    //this.setState({logo:'https://marvelcrowd.com/media/Captura-de-pantalla-2015-10-13-a-las-12.28.25.png'})
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Hola, soy el shouldComponentUpdate ejecutandome :D',nextProps, nextState);
    return true;
  }

  render() {
    console.log('Yo me debería ejecutar en el lugar: 1');
    return (
    <div className="App">
      <Search/>
      <div className="cards">
        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>

        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>

        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>

        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>

        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>

        <ImageCard url="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></ImageCard>
      </div>
      </div>);
  }
}

/**
function App() {
  return (
    
  );
}
 */
export default App;
