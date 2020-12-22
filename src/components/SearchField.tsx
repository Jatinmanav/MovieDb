import React, { useState } from "react";
import Search from "../iconComponents/Search";

const SearchField = () => {
  const [search, setSearch] = useState<boolean>(true);

  return (
    <div>
      <form className="search-container">
        <input className="search-field" placeholder="Search" />
        <button className="search-button">
          <Search className="search-icon" height={25} width={25} />
        </button>
      </form>
    </div>
  );
};

export default SearchField;
