import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex  justify-between items-center px-10 py-4 my-4  w-1/2 mx-auto bg-slate-500 rounded-full text-white">
      <h1 className="text-2xl  font-semibold ">Logo</h1>
      <div>
        <ul className="flex space-x-4">
          <li className="li">
            <Link href={"#"}>Home</Link>
          </li>
          <li className="li">
            <Link href={"#"}>Work</Link>
          </li>
          <li className="li">
            <Link href={"#"}>Contact us</Link>
          </li>
          <li className="li">
            <Link href={"#"}>About us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
