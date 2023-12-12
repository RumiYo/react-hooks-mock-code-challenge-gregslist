import React from "react";
import Search from "./Search";

function Header({ filterList }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterList={filterList} />
    </header>
  );
}

export default Header;
