import React, { useState } from "react";
import { Link } from "react-router-dom";
function DropDown({HandleDrop}) {
 
  return (
    <div className={`absolute right-0 h-[90%]  flex flex-col justify-between bg-gray-950/90  w-64 `}>
      <div className="flex flex-col gap-10 w-full justify-center">
        <div className="flex flex-col">
          <div className="flex justify-end">
          <span class="material-symbols-outlined text-white cursor-pointer" onClick={()=>HandleDrop()}>
cancel
</span>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-lg font-semibold text-white text-center">
              Anjali
            </h1>
            <h3 className="text-lg font-semibold text-white text-center">
              anjali720933@gmail.com
            </h3>
            <h3 className="texxt-lg font-semibold text-white text-center">
              9905070511
            </h3>
          </div>
        </div>
        <div className="flex items-center w-64  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span class="material-symbols-outlined text-white">timer</span>
          <span className="text-lg font-medium text-white">Timer</span>
        </div>
        <Link to="/userprofile" className=" flex items-center w-64  rounded-2xl p-1 hover:bg-cyan-950 justify-center" onClick={()=>HandleDrop()}>
         
          <span className="text-lg font-medium text-white">User Profile</span>
        </Link>
        <Link to="/tasklist" className="flex items-center w-64 rounded-2xl p-1 hover:bg-cyan-950 justify-center" onClick={()=>HandleDrop()}>
          <span class="material-symbols-outlined text-white">task</span>
          <span  className="text-lg font-medium  text-white">Task List</span>
        </Link>
      </div>
      <button className="flex items-start m-auto bg-blue-200 p-2 rounded-2xl hover:bg-red-500 duration-300">
        <span class="material-symbols-outlined text-2xl font-bold  text-black">
          logout
        </span>
        <span className="text-xl font-bold  text-black">Logout</span>
      </button>
    </div>
  );
}

export default DropDown;
