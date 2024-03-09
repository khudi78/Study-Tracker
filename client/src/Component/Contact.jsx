import React,{useState} from 'react'
import axios from 'axios'
import image from "../contact.png";
function Contact() {
      return (
        <div className='flex'>
        <div className=" mt-32 absolute right-96 ml-96 flex flex-col gap-6 bg-cyan-800 z-20 border-white p-4 h-fit rounded-2xl  shadow-2xl shadow-black w-96">
        <div className=" h-80 w-16 rounded-full flex justify-center items-cente m-auto">
          <form action="">          
            <label htmlFor="">                     
             <span className="text-2xl font-bold mt-14 text-black">Email</span>
            </label>
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
              placeholder="enter email..."
            />
            <label htmlFor="">
            <span className="text-2xl font-bold mt-10 text-black">Name</span>

            </label>
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
              placeholder="enter Name..."
            />
            <label htmlFor="">
            <span className="text-2xl font-bold mt-10 row-span-4 text-black">Message</span>

            </label>
            <input type="text" className="text-white outline-none bg-transparent border-b-2 m-4 border-blue-200 w-[20rem] text-xl text-center placeholder:text-gray-400 placeholder:text-2xl"
              placeholder="enter Message..."
            />
               <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Send
            </button>
          </form>
          </div>
          </div>
          <img
                src={image}
                className="filter brightness-50 h-96 w-[38rem] absolute bottom-0"
              />
          </div>
  )
}

export default Contact