import React, { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {name,email,password}= data
    try{
       const {data} = await axios.post('/register',{
        name,email,password
       })

       if(data.error){
        toast.error(data.error)
       }else{
        setData({})
        toast.success('login successful,welcome!')
        navigate('/login')
       }
       
    }catch(error){

    }
  };
  return (
    <div>
      <form action="" onSubmit={registerUser}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
