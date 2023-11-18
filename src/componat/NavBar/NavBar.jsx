import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <h1 className="font-extrabold text-[32px] font-poppins">CareerHub</h1>
      <ul className="flex gap-12 ">
        <li>statics</li>
        <li>Applied Jobs</li>
        <li>Blog</li>
      </ul>
      <button className="text-2xl px-6 py-3 bg-blue-300 rounded-md font-semibold text-white bg-gradient-to-tr from-[#7E90FE] to-[#9873FF]">
        Start Applying
      </button>
    </div>
  );
};

export default NavBar;
