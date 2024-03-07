import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
        <div>
          <form action="" onSubmit={loginUser}>
           
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
            <button type="submit">Login</button>
          </form></div>
  )
}

export default Login