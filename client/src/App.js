import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Dashboard";
import image2 from "./image1.png";
import UserProfile from "./Component/UserProfile";
import UserDetails from "./Component/UserDetails";
import Contact from "./Component/Contact";
import TaskList from "./Component/TaskList";
import Navbar from "./Component/Navbar";
import ShortTerm from "./pages/ShortTerm";
import LongTerm from "./pages/LongTerm";
import Shortterm from "./pages/DashBoard/Shortterm";
import Longterm from "./pages/DashBoard/Longterm";
import Demo from "./pages/DashBoard/Demo";
import Completed from './Component/StudyGoal/Completed';
import Future from './Component/StudyGoal/Future';
import Current from './Component/StudyGoal/Current';
import Timer from './Component/Timer';

import MicDrop from "./Component/MicDrop";
//import Mic from "./Component/Mic";

//import { UserContextProvider } from './context/userContext';

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-950 to-black">
      <UserContextProvider>
        <header>
          <Navbar />
        </header>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasklist" element={<TaskList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/completed' element={<Completed/>}></Route>
          <Route path='/future' element={<Future/>}></Route>
          <Route path='/current' element={<Current/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
         
          <Route path='/micdrop' element={<MicDrop/>}></Route>
         
          <Route
            path="/userProfile"
            element={
              <div className=" w-[1100 px] ml-[150px] mr-[150px] flex justify-between">
                <UserDetails />
                <UserProfile />
                <img
                  src={image2}
                  className="h-96 w-[38rem] absolute bottom-0 "
                ></img>
              </div>
            }
          ></Route>
          <Route path="/shortterm" element={<ShortTerm />}></Route>
          <Route path="/longterm" element={<LongTerm />}></Route>
          <Route path="/short" element={<Shortterm />}></Route>
          <Route path="/long" element={<Longterm />}></Route>
          {/* <Route path="/chart" element={<Demo />}></Route>
         */}</Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
