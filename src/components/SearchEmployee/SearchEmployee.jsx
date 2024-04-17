import React from "react";

function SearchEmployee({searchTerm, setSearchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Employee:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchEmployee;