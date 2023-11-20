import React from "react";
import ActiveLink from "../activeLink/ActiveLink";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-10 absolute w-9/12">
      <h1 className="font-semibold text-[32px] font-poppins">CareerHub</h1>
      <ul className="flex gap-12 ">
        <ActiveLink to={'/statics'}>statics</ActiveLink>
        <ActiveLink to={'/Applied-Jobs'}>Applied Jobs</ActiveLink>
        <ActiveLink to={'/Blog'}>Blog</ActiveLink>
      </ul>
      <button className="text-2xl px-6 py-3 bg-blue-300 rounded-md font-semibold text-white bg-gradient-to-tr from-[#566cfa] to-[#6f40ef] hover:bg-gradient-to-tl duration-75">
        Start Applying
      </button>
    </div>
  );
};

export default NavBar;
