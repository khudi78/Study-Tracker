import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { NavLink } from "react-router-dom";
import image from "../mics.png";
function UserDetails() {
  const [expand, SetExpand] = useState(false);
  const { user } = useContext(UserContext);
  
  const expandSelectGoal = () => {
    SetExpand((prev) => !prev);
  };
  return (
    <div className="flex ">
         <div className="m-10 flex flex-col gap-6 bg-cyan-950 z-20 border-white p-4 h-fit rounded-2xl shadow-lg shadow-zinc-500">
      <div className="h-16 w-16 rounded-full border-white border-2 flex justify-center items-center bg-green-700 m-auto">
        <span className="text-4xl font-bold  text-black">A</span>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl text-white font-medium capitalize">
          {!!user && <h1>{user.name}</h1>}
        </h1>
        <p className="text-xl text-white font-medium">
          {!!user && <h1>{user.username}</h1>}
        </p>
        <p className="text-xl text-white font-medium">
          {!!user && <h1>{user.email}</h1>}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center cursor-pointer duration-200 rounded-lg "
          onClick={expandSelectGoal}
        >
          <div className="flex justify-between">
            <p className="text-xl font-bold text-white text-center">
              Set Study Goal
            </p>
            <span class="material-symbols-outlined text-white">
              {expand ? "expand_more" : "chevron_right"}
            </span>
          </div>
        </div>

        <div
          className={` flex flex-col gap-6 ml-12 transition  duration-300  ease-linear ${
            expand ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">
              chevron_right
            </span>
            <NavLink to="/shortterm">
              <span className="text-lg font-semibold text-white">
                Short Term
              </span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">
              chevron_right
            </span>
            <NavLink to="/longterm">
              <span className="text-lg font-semibold text-white">
                Long Term
              </span>
            </NavLink>
          </div>
        </div>
      </div>
         </div >
         <div className="flex flex-col">
         <h1 className="text-white text-3xl mt-20 ml-40 font-semibold">Add Your Voice</h1>
         <NavLink to="/micdrop">
         <img
                src={image}
                className=" h-[10rem] w-[8rem] mt-10 ml-48 ease-in-out duration-300 rounded-xl bg-none shadow-2xl shadow-transparent"
              />
         
         </NavLink>
        
         </div> 
    
    </div>
  );
}

export default UserDetails;
