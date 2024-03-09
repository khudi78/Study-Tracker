import React, { useEffect, useState } from "react";
import { useStudy } from "../../context/StudyGoal";
import { parse, isSameDay } from "date-fns";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Completed() {
  const { studygoal } = useStudy();
  const [list, setList] = useState([]);
  const { user } = useContext(UserContext);
  console.log("user", user);
  const task = user?.tasks;
  console.log("task", task);

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
    <div className="flex justify-center mt-10">
      <div className="flex flex-col  w-[60%] bg-green-100 justify-between text-center">
        <div className="flex w-full bg-cyan-800 m-auto justify-between">
          <h1 className="text-2xl font-bold text-black m-2 w-44">Event</h1>
          <h1 className="text-2xl font-bold text-black m-2 w-44">Date</h1>
          <h1 className="text-2xl font-bold text-black m-2 w-44">Duration</h1>
        </div>
        <div className="flex flex-col gap-1">
          {task &&
            task
              .filter((data) => {
                const today = new Date();
                const keyDate = new Date(data.key); // Assuming key is formatted as YYYY-MM-DD
                today.setHours(0, 0, 0, 0); // Set today's time to midnight
                keyDate.setHours(0, 0, 0, 0); // Set keyDate's time to midnight
                return today.getTime() === keyDate.getTime();
              })
              .map((data) => (
                <div
                  key={data._id}
                  className="flex m-auto w-full justify-between  odd:bg-cyan-600 even:bg-cyan-400"
                >
                  <p className="text-md text-black m-1 font-semibold w-44">
                    {data.name}
                  </p>
                  <p className="text-md text-black m-1 font-semibold w-44">
                    {data.time}
                  </p>
                  <p className="text-md text-black m-1 font-semibold w-44">
                    {data.key}
                  </p>
                </div>
              ))}
          {!task && (
            <p className="text-lg text-black text-center">No tasks found.</p>
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
    </div>
  );
}

export default Completed;