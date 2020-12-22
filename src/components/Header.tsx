import React from "react";
import SearchField from "../components/SearchField";
import Logo from "../iconComponents/Logo";
import Person from "../iconComponents/Person";
import "../styles/header";

const Header = () => {
  return (
    <div className="header-container">
      <Logo className="logo" height={45} width={155} />
      <div className="header-search-bar">
        <SearchField />
      </div>
      <div className="header-profile">
        <Person className="person-icon" height={45} width={45} />
      </div>
    </div>
  );
};

export default Header;
