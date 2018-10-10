import React from 'react'

const SearchField = ({ onSearchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="text" placeholder="search robots" onChange={onSearchChange} />
        </div>
    )
}

export default SearchField;
