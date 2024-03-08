import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useContext} from "react"

import { UserContext } from "../../context/userContext";

function Todo() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {user} =useContext(UserContext)
  const userId = user?.id;
  const addTodoHandler = (e) => {
    e.preventDefault();
    // Dispatching addTodo with three inputs
    dispatch(addTodo([subject,topic,duration]));


    // dispatch(addTodo(subject));
    // dispatch(addTodo(topic));
    // dispatch(addTodo(duration));
        setSubject("");
    setTopic("");
    setDuration("");
  };

  const [data, setData] = useState({
    subject:"",
    topic:"",
    duration:""
  });

  const shortTermGoal = async (e) => {
    e.preventDefault();
    const {subject,topic,duration}= data
    try{
       const {data} = await axios.put(`/longTerm/${userId}`,{
        subject,topic,duration
       })

       if(data.error){
        toast.error(data.error)
       }else{
        setData({})
        toast.success('Long Term goal added!')
        navigate('/login')
       }
       
    }catch(error){

    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    addTodoHandler(event);
    shortTermGoal(event);
  }
  return (
    <div className="flex justify-center mt-3 min-w-full">
      <form action="" onSubmit={handleFormSubmit} className="">
        <input
          type="text"
          className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          value={data.subject}
          onChange={(e) => {
            setSubject(e.target.value);
            setData({ ...data, subject: e.target.value });
          }}
          placeholder="Enter the Subject"
        />
        <input
          type="text"
          className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          value={data.topic}
          onChange={(e) => {
            setTopic(e.target.value);
            setData({ ...data, topic: e.target.value });
          }}
          placeholder="Enter the topic"
        />
        <input
          type="text"
          className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[30rem] text-2xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          value={data.duration}
          onChange={(e) => {
            setDuration(e.target.value);
            setData({ ...data, duration: e.target.value });
          }}
          placeholder="Enter duration"
        />
        <button className="bg-green-600 p-1 w-20 rounded-lg shadow-2xl shadow-black duration-300 font-bold">
          Add
        </button>
      </form>
    </div>
  );
}

export default Todo;
