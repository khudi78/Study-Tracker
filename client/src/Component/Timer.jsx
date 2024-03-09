import React from 'react'
import {useSelector } from 'react-redux'
import TodoList from './ToDoList'
import { useContext } from "react";
import { UserContext } from '../context/userContext';

function Timer() {
    const list=useSelector(state=>state.todos);
    // const { user } = useContext(UserContext);
    // console.log("user", user);
    // const timertask = user?.timerTask;
    // console.log("task", timertask);

    console.log("list is",list);
  return (
     <div>
         {/* { 
      timertask && timertask
          .map((data) => (
            <div key={data._id} className="text-white w-[500px] h-[50px]">
              <TodoList key={data._id} text={data.input} time={data.time} id={data._id}/>
              
            </div>
          ))
          } */}
        { list.map(({id,text,time})=><TodoList key={id} text={text} time={time} id={id}/>)}
        </div>
  )
}

export default Timer