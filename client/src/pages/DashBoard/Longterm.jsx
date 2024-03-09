import React from 'react';
import { useContext } from "react";
import { UserContext } from '../../context/userContext';

function Longterm() {
 
  const { user } = useContext(UserContext);
  console.log("user",user)
  console.log("user long",user.long)
  // Assuming short-term goals are stored in an array named 'shorty' within user
  const list = user?.long;
 console.log("list",list)
  return (
    <div className="flex justify-center mt-10">
    <div className="flex flex-col  w-[60%] bg-green-100 justify-between text-center">
      <div className="flex w-full bg-cyan-800 m-auto justify-between">
      <h1 className="text-2xl font-bold text-black m-2 w-44">Subject</h1>
          <h1 className="text-2xl font-bold text-black m-2 w-44">Topic</h1>
          <h1 className="text-2xl font-bold text-black m-2 w-44">Duration</h1>
      </div>
      <div className="flex flex-col gap-1">
        {list && ( // Only render if list exists (optional chaining)
          list.map((data) => (
            <div key={data._id} className="text-white h-[50px] flex m-auto w-full justify-between  odd:bg-cyan-600 even:bg-cyan-400">
              <p className="text-md text-black m-1 font-semibold w-44">{data.subject}</p>
              <p className="text-md text-black m-1 font-semibold w-44">{data.topic}</p>
              <p className="text-md text-black m-1 font-semibold w-44">{data.duration}</p>
            </div>
          ))
        )}
        {!list && ( // Display a message if list is undefined (optional)
          <p>No long-term goals found.</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Longterm;
