import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';
import image2 from'./image1.png'
import UserProfile from "./Component/UserProfile";
import UserDetails from "./Component/UserDetails";
import Contact from "./Component/Contact";
import TaskList from "./Component/TaskList";
import Navbar from './Component/Navbar';
import ShortTerm from './pages/ShortTerm';
//import { UserContextProvider } from './context/userContext';


axios.defaults.baseURL='http://localhost:8000/api';
axios.defaults.withCredentials=true

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-950 to-black">
      
      <UserContextProvider>
      <header>
        <Navbar />
      </header>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/tasklist' element={<TaskList/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/userProfile' element={<div className="flex justify-between">
        <UserDetails/>
          <UserProfile/>
          <img src={image2} className="h-96 w-[38rem] absolute bottom-0 "></img>
          </div>}>
          </Route>
          <Route path='/shortterm' element={<ShortTerm/>}></Route>
      </Routes>
      
      </UserContextProvider>
    
    </div>
  );
}

export default App;
