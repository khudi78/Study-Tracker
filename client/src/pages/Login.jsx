import React,{useState} from 'react'
import axios from 'axios'
import image from "../signin.png";

import { toast } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
      });
    
      const loginUser = async (e) => {
        e.preventDefault()
        const {email,password}=data
        try{
           const {data}=await axios.post('/login',{
            email,
            password
        });

        if(data.error){
            toast.error(data.error)
        }else{
            setData({});
            navigate('/dashboard')
        }
           
        }
        catch(error){

        }
      };
      return (
        <div className='flex'>
        <div className=" mt-32 absolute right-96 ml-96 flex flex-col gap-6 z-20 border-white p-4 h-fit rounded-2xl  shadow-xl shadow-black w-96">
        <div className=" h-80 w-16 rounded-full flex justify-center items-cente m-auto">
          <form action="" onSubmit={loginUser}>
           
            <label htmlFor="">                     
             <span className="text-2xl font-bold mt-14 text-white">Email</span>
            </label>
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
              placeholder="enter email..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label htmlFor="">
            <span className="text-2xl font-bold mt-10 text-white">Password</span>

            </label>
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
              placeholder="enter password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          <button className="flex items-start m-auto mt-10 bg-blue-500 p-2 rounded-xl hover:bg-green-500 duration-300"
             type="submit">
                      <span className="text-xl font-bold text-white">Login</span>

             </button>
             <div className=' justify-center text-white ml-20 flex-col'>
             <NavLink>
            <p className="flex text-red-200"></p>Are you a new user?
            <button className="justify-center items-center h-8 m-auto p-2 rounded-l text-black duration-300"
             type="submit">
              <span className=" text-m font-bold text-white hover:text-green-300">Signin</span>

             </button>
             </NavLink>
             </div>
          </form>
          </div>
          </div>
          <img src={image} className="filter brightness-50 h-[90%] w-[100%] absolute bottom-0 "/>

          </div>
  )
}

export default Login