import React from "react";
import { navLinks } from "../../data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar_div">
      <ul className="unorderedlist_ul flex gap-4">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <li
              key={index}
              className={`text-custom-black px-4 py-2 rounded-[2rem] ${
                isActive ? "bg-custom-aqua" : "bg-custom-white"
              }`}
            >
              <Link to={link.path || "#"} className="flex items-center gap-2">
                <img src={link.icon} alt={link.list} />
                <span className="font-semibold text-sm">{link.list}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
