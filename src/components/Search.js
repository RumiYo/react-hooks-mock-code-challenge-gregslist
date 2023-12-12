import React, { useState } from "react";

function Search({ filterList }) {

  const [ searchWord, setSearchWord ] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchWord)
    filterList(searchWord.toLowerCase());
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchWord}
        onChange={e => setSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
