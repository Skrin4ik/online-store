import React from 'react';

const SearchInput = ({ searchStr, onChange }) => {
    return (
        <label className="search">
            <input
                type="text"
                value={searchStr}
                onChange={onChange}
                className="input input-search"
                placeholder="Поиск блюд и ресторанов"
            />
        </label>
    )
}

export default SearchInput;