import React, { useState } from "react";
import Search from "../iconComponents/Search";

const SearchField = () => {
  const [search, setSearch] = useState<boolean>(true);

  return (
    <div>
      <form className="search-container">
        <input className="search-field" />
        <Search className="search-icon" height={30} width={30} />
      </form>
    </div>
  );
};

export default SearchField;
