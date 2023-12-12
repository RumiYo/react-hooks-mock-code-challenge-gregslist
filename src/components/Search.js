import React, { useState } from "react";

function Search({ filterList }) {

  const [ searchWord, setSearchWord ] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    filterList(searchWord.toLowerCase());

  }

  function formInput(e){
    setSearchWord(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchWord}
        onChange={formInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
