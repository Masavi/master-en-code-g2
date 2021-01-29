import React from 'react';
import ImageCard from './components/ImageCard';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// 1 .- (Search) Escribir el buscador 
// 2 .- (App) Pedirle la información a giphy
// 3 .- (App) Mostrar el resultado en las cards
class App extends React.Component {
  // Este método es inseguro/unsafe y ya no se ocupa
  constructor(props){
    super(props);
    this.state = {
      gifsUrl: []
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

  sendSearch = (word) => {
    //console.log('Soy la palabra de búsqueda', word);
    // ejecuta la peticion a la API
    axios.get(`https://api.tenor.com/v1/search?key=FBGXXSMMLXBO&q=${word}&limit=8`)
    .then(({ data: { results }, status}) => {
      //console.log(status);
      const urls = results.map(elemento => {
        const media = elemento.media[0].gif.url;
        //const gifUrl = Object.keys(media).map(key => media[key]);
        return media;
      });
      //console.log(urls);
      this.setState({ gifsUrl: urls });
      //console.log(this.state.gifsUrl);
      //results[0].url
    })
    .catch((error) => {
      // handle error
      console.log('Nos equivocamos', error);
    });

  };

  render() {
    console.log('Yo me debería ejecutar en el lugar: 1');
    return (
    <div className="App">
      <Search emitSearch={this.sendSearch} />
      <div className="cards">
        {
          this.state.gifsUrl.map(gif => <ImageCard url={gif}/>)
        }
      </div>
      </div>);
  }
}

/**
function App() {
  return (
    
  );
}

<ImageCard url={this.state.gifsUrl[0] ? this.state.gifsUrl[0] : 'no-url' }></ImageCard>

        <ImageCard url={this.state.giftsUrl && this.state.gifsUrl[1]}></ImageCard>

        <ImageCard url={this.state.gifsUrl[2] || 'no-url'}></ImageCard>
 */
export default App;
