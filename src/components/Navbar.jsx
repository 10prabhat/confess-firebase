import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center px-4 justify-between bg-indigo-700 text-white h-14">
      <div className="logo text-2xl font-semibold">
        <Link to="/">CodingMess</Link>
      </div>
      <ul className="flex gap-8 text-lg">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
