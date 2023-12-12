import React from "react";
import Search from "./Search";
import SortByArea from "./SortByArea";

function Header({ filterList, sortOn, updateSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterList={filterList} />
      <br/>
      <p>Sort by area: </p> 
      <SortByArea sortOn={sortOn} updateSort={updateSort}/>
    </header>
  );
}

export default Header;
