import React from "react";
import Logo from "../iconComponents/Logo";
import Person from "../iconComponents/Person";
import Search from "../iconComponents/Search";

const Header = () => {
  return (
    <div>
      <Logo height={30} width={100} />
      <h1>Header</h1>
      <Search height={30} />
      <Person height={30} width={30} />
    </div>
  );
};

export default Header;
