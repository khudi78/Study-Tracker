import React, { useState } from "react";
import axios from 'axios'
import image from "../signin.png";
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    username:"",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {name,email,password,username}= data
    try{
       const {data} = await axios.post('/register',{
        name,email,username,password
       })

       if(data.error){
        toast.error(data.error)
       }else{
        setData({})
        toast.success('registration successful,welcome!')
        navigate('/login')
       }
       
    }catch(error){

    }
  };
  return (
    <div className='flex '>
        <div className=" mt-32 absolute right-96 bottom-32 ml-96 flex flex-col gap-6 bg-cyan-700  border-white p-4 h-fit rounded-2xl  shadow-2xl shadow-black w-96 z-10">
        <div className=" h-96 w-16 rounded-full flex justify-center items-cente m-auto">
      <form action="" onSubmit={registerUser}>
        <label htmlFor="">
        <span className="text-2xl font-bold mt-14 text-black">Name</span>

        </label>
        <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          placeholder="enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label htmlFor="">
        <span className="text-2xl font-bold mt-14 text-black">Username</span>

        </label>
          <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          placeholder="enter username..."
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label htmlFor="">
        <span className="text-2xl font-bold mt-14 text-black">Email</span>

        </label>       
          <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="">
        <span className="text-2xl font-bold mt-14 text-black">Password</span>

        </label>
        <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
          <button className="flex items-start m-auto mt-10 bg-blue-200 p-2 rounded-xl hover:bg-green-500 duration-300"type="submit">
       <span className="text-xl font-bold text-black">Signup</span>

             </button>      </form>
    </div>
    </div>
    <img src={image} className="filter brightness-50 h-[90%] w-[100%] absolute bottom-0 "/>
    </div>
      );
}

export default Signup;
