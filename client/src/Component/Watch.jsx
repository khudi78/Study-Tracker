import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateTodo } from "./Tasklist/TodoSlice";
import Progress from "./Progress";

const Watch = ({ id, time }) => {
  const dispatch = useDispatch();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (minutes < time) {
      if (isActive) {
        intervalRef.current = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 59) {
              setMinutes((prevMinutes) => {
                if (prevMinutes === 59) {
                  setHours((prevHours) => prevHours + 1);
                  return 0;
                }
                return prevMinutes + 1;
              });
              return 0;
            }
            return prevSeconds + 1;
          });
        }, 1000);
      } else {
        clearInterval(intervalRef.current);
      }
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);
  
 useEffect(() => {
    dispatch(UpdateTodo({ id, minutes }));
    if(time==minutes){
        stopTimer();
        }
  }, [minutes]);
  
  console.log(time);
  console.log(minutes);
  return (
    <div className="flex items-center">
      <div>
      <div className="text-lg text-black">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>

      <div className="flex gap-4">
        <button
          onClick={startTimer}
          className="bg-green-200 h-6 w-6 rounded-full"
        >
          <span
            class="material-symbols-outlined text-green-900"
            
          >
            play_arrow
          </span>
        </button>
        <button onClick={stopTimer} className="bg-red-200 h-6 w-6 rounded-full">
          <span class="material-symbols-outlined text-red-900">
            stop_circle
          </span>
        </button>
      </div>
      </div>
      {/* <Progress id={id} /> */}
    </div>
  );
};

export default Watch;
