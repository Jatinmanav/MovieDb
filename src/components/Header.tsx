import React from "react";
import Logo from "../iconComponents/Logo";
import Person from "../iconComponents/Person";
import Search from "../iconComponents/Search";
import "../styles/header";

const Header = () => {
  return (
    <div className="header-container">
      <Logo height={30} width={100} />
      <div className="header-profile">
        <Search className="search-icon" height={30} />
        <Person className="person-icon" height={30} width={30} />
      </div>
    </div>
  );
};

export default Header;
