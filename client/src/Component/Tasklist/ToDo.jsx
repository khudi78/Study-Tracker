// import React, { useState } from 'react'
// import {useDispatch} from "react-redux"
// import { addTodo } from './TodoSlice';


// function Todo() {
//     const [input,setinput]=useState('');
//     const dispatch=useDispatch();
  
//     const addTodoHandler=(e)=>{
//         e.preventDefault();
//         dispatch(addTodo(input));
//         setinput("");
//     }
//   return (
//     <div className="flex justify-center mt-3 min-w-full">
//         <form action="" onSubmit={addTodoHandler} className="">
//             <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Enter your task'/>
//             <button className="bg-green-600 p-1 w-20 rounded-lg shadow-2xl shadow-black duration-300 font-bold">Add</button>
//         </form>
//     </div>
//   )
// }

// export default Todo

import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from './TodoSlice';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useContext} from "react"
import { UserContext } from '../../context/userContext';

function Todo() {
    const [input,setinput]=useState('');
    const [time,SetTime]=useState(0)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const {user} =useContext(UserContext)
     const userId = user?.id;
    
    // const addTodoHandler=(e)=>{
    //     e.preventDefault();
    //     dispatch(addTodo({input,time}));
    //     setinput("");
    // }
  
    const addTask = async (input,time) => {
      // input.preventDefault();
      // time.preventDefault()
      
      try{
        console.log("inside trial")
        console.log("time",time);
        console.log("input",input)
        console.log("id",userId)
        const data = await axios.put(`/task/${userId}`,{
          time,input
         })
  
         if(data.error){
          toast.error(data.error)
         }else{
          
          toast.success('event added added!')
          navigate('/login')
         }
        //  const {data} = await axios.put(`/add/${userId}`,{
        //   input,time
        //  })
        //  console.log(data)
  
        //  if(data.error){
        //   toast.error(data.error)
        //  }else{
        //   //setData({})
        //   toast.success('Short Term goal added!')
        //   navigate('/login')
        //  }
         
      }catch(error){
  
      }
    }

    // const addTask = async (input,time) => {
    //   // e.preventDefault();
    //    //const {input,time}= data
    //    console.log("inside addTask")
    //    console.log("time",time);
    //    console.log("input",input)
    //    try {
    //     // Input validation (optional):
    //     // if (!input || !time) {
    //     //   toast.error('Please enter both task and time.');
    //     //   return; // Exit the function if validation fails
    //     // }
    //     console.log("inside trial")
    //     console.log("time",time);
    //     console.log("input",input)
    //     console.log("id",userId)
    //     console.log("he")
        
    //     const {response}= await axios.put(`/addtask/${userId}`,{
    //       input,time
    //      })
    //      console.log("after response",response)

    //     console.log("inside try")
    //    console.log("time",time);
    //    console.log("input",input)
    
    //     if (response.error) {
    //       toast.error(response.error);
    //     } else {
    //       toast.success('Task added successfully!');
    //       // Optional: Update local state or UI if needed
    //       // setData({}); // Uncomment if you have state management
    
    //       // Navigate to login only if necessary:
         
    //         // navigate('/login');
          
    //     }
    //   } catch (error) {
    //     console.error('Error adding task:', error);
    //     toast.error('An error occurred while adding the task.'); // Inform the user
    //   }
    //  };

    const addTimetoTask=()=>{
     
      const time=window.prompt("Enter the Duration in minute");
      console.log("settime",time)
      SetTime(time);
      addTask(input,time);
      
    }

    
  return (
    <div className="flex justify-center mt-3 min-w-full">
        <form action=""  className="">
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Enter your task'/>
            <button className="bg-green-600 p-1 w-20 rounded-lg shadow-2xl shadow-black duration-300 font-bold" onClick={addTimetoTask}>Add</button>
        </form>
    </div>
  )
}

export default Todo