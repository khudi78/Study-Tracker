import React from 'react'
import {useSelector } from 'react-redux'
import TodoList from './ToDoList'
import { useContext } from "react";
import { UserContext } from '../context/userContext';

function Timer() {
    const list=useSelector(state=>state.todos);
    const { user } = useContext(UserContext);
    console.log("user", user);
     const tasks = user?.tasks;
    console.log("task", tasks);

    console.log("list is",list);
  return (
     <div>
         
        { list.map(({id,text,time})=><TodoList key={id} text={text} time={time} id={id}/>)}
        {/* { 
      tasks && tasks
          .map((data) => (
            <div key={data._id} className="text-white w-[500px] h-[50px]">
              <TodoList key={data._id} text={data.name} time={data.time} id={data._id}/>
              
            </div>
          ))
          } */}
        </div>
  )
}

export default Timer