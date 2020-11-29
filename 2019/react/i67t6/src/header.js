import React from "react";
import Counter from "./counter";

function Header({ count }) {
  return (
    <div className="header">
      <h1 className="title">
        <span>Movie App</span>
        <Counter count={count} />
      </h1>
    </div>
  );
}

export default Header;
