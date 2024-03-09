import React, { useEffect, useState } from "react";
import Watch from "./Watch";
import Progress from "./Progress";

function TodoList({ id, text,time }) {
 

  return (
    <div className="flex justify-center  items-center">
      <div
        key={id}
        className={`text-white text-xl flex space-x-6 
          bg-blue-200 m-4 w-[60%] justify-between rounded-xl h-12 items-center`}
        >
        <p className={`text-black text-xl font-bold pl-7`}>
          {text}
        </p>
        {/* <p className="text-white font-semibold">{time} Hr</p> */}
        <Watch id={id} time={time}/>
      </div>
      <Progress id={id}/>
    </div>
  );
}

export default TodoList;
