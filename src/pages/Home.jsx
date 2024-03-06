import React from "react";
import Navbar from "../Component/Navbar";
import image from "../image.jpg";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-950 to-black">
      <header>
        <Navbar />
      </header>
      <div className="flex justify-end  items-center h-full">
        <div className="flex flex-col">
          <h1 className="text-blue-200 text-3xl font-bold ml-6">
            Stop Thinking, The Answer to Everthing is to develop a Skills...
          </h1>
          <button className="bg-blue-400 w-fit m-auto h-11 p-2 rounded-2xl hover:bg-transparent hover:border-2 hover:border-blue-200 flex items-center hover:text-blue-200 duration-300" >
          <a href="" className="text-lg font-semibold text-black hover:text-blue-200">Login</a>
          <span className="text-lg font-medium text-black hover:text-blue-200"> /</span>
          <a href="" className="text-lg font-semibold text-black hover:text-blue-200"> SignUp</a>
          </button>
        </div>
        <img
          src={image}
          className=" h-[25rem] w-[35rem] mt-5 ease-in-out duration-300 rounded-xl bg-none shadow-2xl shadow-transparent"
        />
      </div>
    </div>
  );
}

export default Home;