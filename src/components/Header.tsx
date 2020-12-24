import React from "react";
import SearchField from "../components/SearchField";
import Logo from "../iconComponents/Logo";
import Person from "../iconComponents/Person";
import "../styles/header";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <Logo className="logo" height={30} width={135} />
        <div className="header-search-bar">
          <SearchField />
        </div>
        <div className="header-profile">
          <Person className="person-icon" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;
