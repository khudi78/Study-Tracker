import React, { useState } from "react";
import DropDownGoal from "../Component/DropDownGoal";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { NavLink,Link } from "react-router-dom";
import Demo from "./DashBoard/Demo";
//import ContributionGraph from './ContributionGraph';

function DashBoard() {
  const [expand, SetExpand] = useState(false);
  const { user } = useContext(UserContext);
  console.log("my user",user)
  const expandSelectGoal = () => {
    SetExpand((prev) => !prev);

    const data = [
      { date: '2024-01-01', count: 5 },
      { date: '2024-01-02', count: 10 },
      // Add more data here
    ];
  };
  return (
    <div className="flex ml-[150px] w-[1100px] mr-[150px]">
     
      <div className="m-20 ml-36 flex flex-col gap-6 bg-cyan-950 z-20 border-white p-4 h-fit rounded-2xl  shadow-lg shadow-zinc-500 w-[400px]">
        <div className="h-16 w-16 rounded-full border-white border-2 flex justify-center items-center bg-green-700 m-auto">
          <span className="text-4xl font-bold  text-black">A</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl capitalize text-white font-medium">
            {!!user && <h1>{user.name}</h1>}
          </h1>
          <h2 className="text-xl  text-white font-medium">
            {!!user && <h2>{user.email}</h2>}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex items-center cursor-pointer duration-200 rounded-lg "
            onClick={expandSelectGoal}
          >
            <div className="flex justify-between">
              <p className="text-xl font-bold text-white text-center">
                Study Goal
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
            <Link to="/current" className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Current </span>
          </Link>
          <Link to="/completed" className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
            <span className="text-lg font-semibold text-white">Completed</span>
          </Link>
          <Link to="/future" className="flex items-center">
            <span class="material-symbols-outlined text-white">chevron_right</span>
             <span className="text-lg font-semibold text-white">Future</span>
          </Link>
            <div className="flex items-center">
              <span class="material-symbols-outlined text-white">
                chevron_right
              </span>
              <NavLink to="/short">
                <span className="text-lg font-semibold text-white">
                  ShortTerm
                </span>
              </NavLink>
            </div>
            <div className="flex items-center">
              <span class="material-symbols-outlined text-white">
                chevron_right
              </span>
              <NavLink to="/long">
                <span className="text-lg font-semibold text-white">
                  LongTerm
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div>
          <h1 className=" w-[750px] h-[300px] ml-[50px] mt-[80px] text-white">
            <Demo />
          </h1>
        </div>
      <div className="flex flex-col">
       
      </div>
      {/* <div>
           <h1>Contribution Graph</h1>
           <ContributionGraph data={data} />
         </div> */}
      
      {/* </div> */}
    </div>
  );
}
export default DashBoard;
