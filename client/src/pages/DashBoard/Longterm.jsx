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
          <p>No long-term goals found.</p>
        )}
      </div>
    </div>
  );
}

export default Longterm;
