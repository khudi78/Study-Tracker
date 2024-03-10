import React from "react";

import image from "../image.jpg";
import {NavLink} from "react-router-dom"
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-950 to-black">
    

    <div className="relative">
      <img src={image} className="filter brightness-50 h-[90%]  w-[100%]  bottom-0 "/>

      <div className="absolute top-[2px] ml-[450px] w-[700px] flex justify-between items-center h-full">
              <div className="flex flex-col ml-8 p-16 h-[260px] border border-t-slate-800 border-slate-700 shadow-xl shadow-slate-700 ">
                <h1 className=" text-blue-400 italic text-3xl font-bold ml-6 w-100">
                  Difficult in keeping track of study. Join us and make it a habit...
                  
                </h1>
                <div className="flex ">
                <button className="w-24 hover:bg-slate-400 hover:shadow-slate-600 hover:text-black justify-center shadow-md shadow-slate-500 flex items-start m-auto mt-10 ml-40 bg-slate-700 p-3 rounded-lg  duration-300">
                  <NavLink
                    to="/login"
                    className="text-lg font-semibold text-white  hover:text-blue-200"
                  >
                    LogIn
                  </NavLink>
                  </button>
                  <button className="w-24 justify-center shadow-md hover:bg-slate-400 hover:shadow-slate-600 hover:text-black shadow-slate-500 flex items-start m-auto mt-10 ml-[-70px]  bg-slate-700 p-3 rounded-lg duration-300">
                  <NavLink
                    to="/signup"
                    className="text-lg font-semibold text-white hover:text-blue-200"
                  >
                    SignUp
                  </NavLink>
                </button>
               
                </div>
              </div>
              </div>
    </div>
   
              
            
    </div>
  );
}

export default Home;
