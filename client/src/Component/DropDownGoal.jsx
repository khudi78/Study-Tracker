import React from "react";

function DropDownGoal() {
  return (
    <div className="absolute h-[30%]  flex flex-col justify-between bg-gray-950/60 left-40 w-40 ">
      <div className="flex flex-col gap-5 w-full justify-center">
        <div className="flex items-center w-40  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span className="text-lg font-medium text-white">Current</span>
        </div>
        <div className="flex items-center w-40  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span className="text-lg font-medium text-white">Completed</span>
        </div>
        <p className=" flex items-center w-40  rounded-2xl p-1 hover:bg-cyan-950 justify-center">
          <span className="text-lg font-medium text-white">Future</span>
        </p>    
      </div>
    </div>
  );
}

export default DropDownGoal;