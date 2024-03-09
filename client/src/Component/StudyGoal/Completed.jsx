import React, { useEffect, useState } from 'react';
import { useStudy } from '../../context/StudyGoal';
import { parse, isBefore,isSameDay } from 'date-fns';
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Completed() {
  const { studygoal } = useStudy();
  const [list, setList] = useState([]);
  const { user } = useContext(UserContext);
  console.log("user",user);
  const task = user?.tasks;
  console.log("task",task);

  // useEffect(() => {
  //   const currentDate = new Date();

  //   // Filter items where the key date is less than the current date
  //   const newList = studygoal.filter((item) => {
  //     const dateString = Object.keys(item)[0]; // Extract the date string from the key
  //     const itemDate = parse(dateString, "yyyy-M-d", new Date()); // Parse the date string into a Date object
  //     return isSameDay(itemDate, currentDate); // Use isBefore for comparison
  //   });
  //   console.log(newList);
  //   setList(newList);
  // }, [studygoal]);
  // console.log(list);
  return (
    <div>
      <div className="flex">
        <h1 className="text-xl font-bold text-white m-10">Date</h1>
        <h1 className="text-xl font-bold text-white m-10">Event</h1>
      </div>

      <div className="flex flex-col gap-10">
        {task && 
        task
          .filter((data) => {
            const today = new Date();
            const keyDate = new Date(data.key); // Assuming key is formatted as YYYY-MM-DD

            // Extract only the date parts (year, month, day) for comparison
            today.setHours(0, 0, 0, 0); // Set today's time to midnight
            keyDate.setHours(0, 0, 0, 0); // Set keyDate's time to midnight

            return today.getTime() > keyDate.getTime();
          }).map((data) => (
            <div key={data._id} className="text-white w-[500px] h-[50px]">
              <p>{data.name}</p>
              <p>{data.time}</p>
              <p>{data.key}</p>
            </div>
          ))}
        {!task && ( // Display a message if list is undefined (optional)
          <p>No tasks found.</p>
        )}
      </div>

      {/* <div>
        {list.map((item, index) => {
          const dateString = Object.keys(item)[0];
          const value = item[dateString];

          return (
            <div key={index} className="flex">
              <p className="text-lg font-semibold text-white m-10">
                {dateString}
              </p>
              <p className="text-lg font-semibold text-white m-10">{value}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Completed;
