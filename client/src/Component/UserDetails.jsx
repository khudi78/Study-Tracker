import React, { useState } from "react";

function UserDetails() {
  const [expand, SetExpand] = useState(false);
  const expandSelectGoal = () => {
    SetExpand((prev) => !prev);
  };
  return (
    <div className="m-10 flex flex-col gap-6 bg-cyan-950 z-20 border-white p-4 h-fit rounded-2xl  shadow-2xl shadow-black w-56">
      <div className="h-16 w-16 rounded-full border-white border-2 flex justify-center items-center bg-green-700 m-auto">
        <span className="text-4xl font-bold  text-black">A</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl text-white font-medium">Anjali Kumari</h1>
        <h2 className="text-xl text-white font-medium">Froster23</h2>
        <p className="text-xl text-white font-medium">anjali@gmail.com</p>
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
            <span className="text-lg font-semibold text-white">Short Term</span>
          </div>
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Long Term</span>
          </div>
        </div>
     </div>
    </div>
  );
}

export default UserDetails;
