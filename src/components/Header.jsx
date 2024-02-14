import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="max-w-[100%] bg-blue-800 py-4 px-6 flex justify-between text-[#fff]">
      <span className="text-3xl font-bold">Photo </span>
      <div className="flex gap-4">
        <NavLink className="text-xl font-semibold" to={"/"}>
          Home
        </NavLink>
        <NavLink className="text-xl font-semibold" to={"photo"}>
          Photo
        </NavLink>
        <NavLink className="text-xl font-semibold" to={"about"}>
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
