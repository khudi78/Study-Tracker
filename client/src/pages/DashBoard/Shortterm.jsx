import React from 'react';
import { useContext } from "react";
import { UserContext } from '../../context/userContext';

function Shortterm() {
  const { user } = useContext(UserContext);
  console.log("user",user)
  console.log("user shorty",user.shorty)
  // Assuming short-term goals are stored in an array named 'shorty' within user
  const list = user?.shorty;
 console.log("list",list)
  return (
    <div>
      <div className='flex flex-col gap-10'>
        {list && ( // Only render if list exists (optional chaining)
          list.map((data) => (
            <div key={data._id} className='text-white w-[500px] h-[50px]'>
              <p>{data.subject}</p>
              <p>{data.topic}</p>
              <p>{data.duration}</p>
            </div>
          ))
        )}
        {!list && ( // Display a message if list is undefined (optional)
          <p>No short-term goals found.</p>
        )}
      </div>
    </div>
  );
}

export default Shortterm;
