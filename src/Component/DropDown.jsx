import React from "react";

function DropDown() {
  return (
    <div className="absolute h-[90%]  flex flex-col justify-between bg-gray-400/35 right-0 w-52 ">
      <div className="flex flex-col gap-10 w-full justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold text-white text-center">Anjali</h1>
          <h3 className="text-lg font-semibold text-white text-center">
            anjali720933@gmail.com
          </h3>
          <h3 className="texxt-lg font-semibold text-white text-center">9905070511</h3>
        </div>
        <div className="flex items-center w-52  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span class="material-symbols-outlined text-white">timer</span>
          <span className="text-lg font-medium text-white">Timer</span>
        </div>
        <p className=" flex items-center w-52  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span class="material-symbols-outlined text-white">arrow_drop_down</span>
          <span className="text-lg font-medium text-white">Study Goals</span>
        </p>
        <div className="flex items-center w-52 rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span class="material-symbols-outlined text-white">task</span>
          <span className="text-lg font-medium  text-white">Task List</span>
        </div>
      </div>
      <button className="flex items-start m-auto bg-blue-200 p-2 rounded-2xl hover:bg-red-500 duration-300">
        <span class="material-symbols-outlined text-2xl font-bold  text-black">
          logout
        </span>
        <span className="text-2xl font-bold  text-black">Logout</span>
      </button>
    </div>
  );
}

export default DropDown;
