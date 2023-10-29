// src/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div style={{  padding:'10px', marginLeft:'10px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: '70%' }} 
      />
      <button onClick={handleSearch} style={{ backgroundColor: '#7848f4', border:'20px', borderRadius:'5px', width:'100px', height:'35px' }}>Search</button>

    </div>
  );
};

export default SearchBar;
