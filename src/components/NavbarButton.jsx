import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarButton = ({ address, children }) => {
  return (
    <Link
      to={address}
      className="block hover:bg-gray-800 hover:rounded-md hover:border-2 hover:border-gray-400 px-2 py-1"
    >
      {children}
    </Link>
  );
};

export default NavbarButton;
