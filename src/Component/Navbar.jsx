import React, { useState } from "react";
import logo from "../logo.png";
import DropDown from "./DropDown";
function Navbar() {
  const[drop,SetDrop]=useState(false);
  const HandleDropDownMenu=()=>{
    SetDrop(prev=>!prev);
  }
  return (
    <div>
      <nav className="flex justify-between h-16 bg-gradient-to-r from-[#10357a] via-[#032759] to-cyan-950 items-center ">
        <div className="flex items-center ml-6 bg-blue-200 rounded-3xl p-2">
          <img src={logo} alt="" className="h-10 w-10 bg-none" />
          <h1 className="text-2xl font-bold text-black">StudySnap</h1>
        </div>
        <div className=" w-[29rem] mr-10">
          <ul className="flex  w-full justify-between">
            <li>
              <a href="" className="text-lg font-medium text-white">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-lg font-medium text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="text-lg font-medium text-white">
                Dashboard
              </a>
            </li>
            <li>
              <button className="flex items-center" onClick={HandleDropDownMenu}>
                <span className="material-symbols-outlined text-lg font-medium text-white">
                  person
                </span>
                <span className="text-lg font-medium text-white">Person</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {drop && <div className="duration-300 ease-in-out"><DropDown/></div>}
    </div>
  );
}

export default Navbar;
