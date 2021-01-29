import { Component } from 'react';

class Search extends Component {
    render() {
        return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar en todos los gifs"
                className="search-input"
            />
            <button
                className="search-button"
            >
                Buscar
            </button>
        </div>
        );
    }
}

export default Search;