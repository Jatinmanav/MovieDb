import React from "react";
import SearchField from "../components/SearchField";
import Logo from "../iconComponents/Logo";
import Person from "../iconComponents/Person";
import "../styles/header";

const Header = () => {
  return (
    <div className="header-container">
      <Logo className="logo" height={40} width={150} />
      <div>
        <ul className="header-submenu">
          <li className="header-submenu-item">Movies</li>
          <li className="header-submenu-item">TV Shows</li>
          <li className="header-submenu-item">In Theatres</li>
        </ul>
      </div>
      <div className="header-profile">
        <SearchField />
        <Person className="person-icon" height={40} width={40} />
      </div>
    </div>
  );
};

export default Header;
