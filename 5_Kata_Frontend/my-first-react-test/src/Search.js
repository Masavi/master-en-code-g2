import React from 'react';

const Search = ({ title, value, onChange }) => {

    return (
        <div>
            <label htmlFor="search">{ title }</label>
            <input
                data-testid="idTestSearch"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Search;
