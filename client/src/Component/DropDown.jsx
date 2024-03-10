import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useContext} from "react"
import { UserContext } from "../context/userContext"

import { addTodo } from "./Tasklist/TodoSlice";
import {useDispatch} from "react-redux"

function DropDown({ HandleDrop }) {
  const {user} =useContext(UserContext)
  const tasktimer=user?.timerTask
  const tasks=user?.tasks
  const shorty=user?.shorty
  const long=user?.long
  const dispatch=useDispatch();

  const addTodoHandler=()=>{
    //e.preventDefault();
    tasktimer &&
    tasktimer.map((data)=>
    { const input=data.input
      const time=data.time
      dispatch(addTodo({ input, time })); // Dispatch inside the map callback
      
    } )

    tasks &&
    tasks.map((data)=>
    { const input=data.name
      const time=data.time
      dispatch(addTodo({ input, time })); // Dispatch inside the map callback
      
    } )

    shorty &&
    shorty.map((data)=>
    { const input=data.subject
      const time=data.duration
      dispatch(addTodo({ input, time })); // Dispatch inside the map callback
      
    } )

    long &&
    long.map((data)=>
    { const input=data.subject
      const time=data.duration
      dispatch(addTodo({ input, time })); // Dispatch inside the map callback
      
    } )
    
}

  return (
    <div
      className={`absolute right-0 h-[90%]  flex flex-col justify-between bg-gray-950/90  w-64 z-20`}
    >
      <div className="flex flex-col gap-10 w-full justify-center">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <span
              class="material-symbols-outlined text-white cursor-pointer"
              onClick={() => HandleDrop()}
            >
              cancel
            </span>
          </div>
          <div className="flex flex-col gap-6 text-center">
             <h1 className="text-xl capitalize text-white font-medium">{!!user && (<h1>{user.name}</h1>)}</h1>
             <h2 className="text-xl text-white font-medium">{!!user && (<h1>{user.email}</h1>)}</h2>
            <h3 className="texxt-lg font-semibold text-white text-center">
              9905070511
            </h3>
          </div>
        </div>
        <Link
          to="/timer"
          className="flex items-center w-64 rounded-2xl p-1 hover:bg-cyan-950 justify-center"
          onClick={() => {
            HandleDrop(); // Call HandleDrop first
            addTodoHandler(); // Then call addTodoHandler
          }}
        >
          <span class="material-symbols-outlined text-white">timer</span>
          <span className="text-lg font-medium  text-white">TImer</span>
        </Link>
        <Link
          to="/userprofile"
          className=" flex items-center w-64  rounded-2xl p-1 hover:bg-cyan-950 justify-center"
          onClick={() => HandleDrop()}
        >
         <span class="material-symbols-outlined text-white">person</span>
          <span className="text-lg font-medium text-white">User Profile</span>
        </Link>
        <Link
          to="/tasklist"
          className="flex items-center w-64 rounded-2xl p-1 hover:bg-cyan-950 justify-center"
          onClick={() => HandleDrop()}
        >
          <span class="material-symbols-outlined text-white">task</span>
          <span className="text-lg font-medium  text-white">Add Task List</span>
        </Link>
      </div>
      {/* <button className="flex items-start m-auto bg-blue-200 p-2 rounded-2xl hover:bg-red-500 duration-300">
        <span class="material-symbols-outlined text-2xl font-bold  text-black">
          logout
        </span>
        <span className="text-xl font-bold  text-black">Logout</span>
      </button> */}
      <button className="w-24 justify-center shadow-md shadow-slate-500 text-white flex items-start m-auto  bg-slate-700 p-3 rounded-lg hover:bg-slate-400 hover:shadow-slate-600 hover:text-black  duration-300">
      <span class="material-symbols-outlined text-2xl font-bold   hover:text-black">
          logout
        </span>
                    SignUp
       </button>
    </div>
  );
}

export default DropDown;
