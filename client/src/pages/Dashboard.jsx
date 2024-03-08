import React, { useState } from "react";
import DropDownGoal from "../Component/DropDownGoal";
import {useContext} from "react"
import { UserContext } from "../context/userContext"


function DashBoard() {
  const [expand, SetExpand] = useState(false);
  const {user} =useContext(UserContext)
  const expandSelectGoal = () => {
    SetExpand((prev) => !prev);
  };
  return (
    <div>
    <div className="m-20 ml-32 flex flex-col gap-6 bg-cyan-950 z-20 border-white p-4 h-fit rounded-2xl  shadow-2xl shadow-black w-56">
      <div className="h-16 w-16 rounded-full border-white border-2 flex justify-center items-center bg-green-700 m-auto">
        <span className="text-4xl font-bold  text-black">A</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl text-white font-medium">{!!user && (<h1>{user.name}</h1>)}</h1>
        <h2 className="text-xl text-white font-medium">{!!user && (<h2>{user.email}</h2>)}</h2>
      </div>
     <div className="flex flex-col gap-4">
     <div className="flex items-center cursor-pointer duration-200 rounded-lg " onClick={expandSelectGoal}>
<div className="flex justify-between">
<p className="text-xl font-bold text-white text-center">Study Goal</p>
        <span class="material-symbols-outlined text-white">{expand?'expand_more':'chevron_right'}</span>
</div>
      </div>
    
        <div className= {` flex flex-col gap-6 ml-12 transition  duration-300  ease-linear ${
          expand ? "block" : "hidden"
        }`}>
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Current </span>
          </div>
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Completed</span>
          </div>
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Future</span>
          </div>
        </div>
     </div>
    </div>
    <div className="flex">
    <div><h1 className=" w-72 h-64 ml-96  border border-white"></h1></div>
    <div><h1 className=" w-72 h-64 ml-96  border border-white"></h1></div>
    </div>
    <div><h1 className=" mt-10 w-[50%] h-44 ml-96  border border-white"></h1></div>

    </div>
  );
}
export default DashBoard;