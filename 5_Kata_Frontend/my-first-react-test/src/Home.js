import React, { useState } from 'react';
import Search from './Search';

const Home = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <h1>Hola desde Home</h1>
            <Search
                title={'Mi búsqueda'}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </>
    )
};

export default Home;
