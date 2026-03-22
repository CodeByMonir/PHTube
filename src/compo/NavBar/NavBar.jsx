import React from "react";

const NavBar = () => {
  return (
    <div className="navbar shadow-sm flex justify-between bg-white">
      <div className="flex">
        <a className="">
          <img src="/src/assets/Logo.png" alt="" />
        </a>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered border-[gray] bg-white text-[gray] w-24 md:w-auto"
        />
      </div>

      <button className="btn btn-accent">Sign In</button>
    </div>
  );
};

export default NavBar;
