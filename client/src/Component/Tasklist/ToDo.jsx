import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from './TodoSlice';


function Todo() {
    const [input,setinput]=useState('');
    const dispatch=useDispatch();
  
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setinput("");
    }
  return (
    <div className="flex justify-center mt-3 min-w-full">
        <form action="" onSubmit={addTodoHandler} className="">
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Enter your task'/>
            <button className="bg-green-600 p-1 w-20 rounded-lg shadow-2xl shadow-black duration-300 font-bold">Add</button>
        </form>
    </div>
  )
}

export default Todo