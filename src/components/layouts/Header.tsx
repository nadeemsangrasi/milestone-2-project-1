import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sm:flex  justify-between items-center px-4 sm:px-10 py-2 sm:py-4 my-4   sm:w-3/5 lg:w-1/2 mx-auto bg-slate-500 rounded-full text-white">
      <h1 className="text-xl md:text-2xl  font-semibold text-center sm:text-start -pt-2 ">
        Logo
      </h1>
      <div>
        <ul className="flex space-x-4 mx-auto items-center justify-center">
          <li className="li">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="li">
            <Link href={"/work"}>Work</Link>
          </li>
          <li className="li">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="li">
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
