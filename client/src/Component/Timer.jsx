import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const Timer = () => {
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

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
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

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl mb-4">
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="flex gap-4">
        <button onClick={startTimer} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Start
        </button>
        <button onClick={stopTimer} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Stop
        </button>
        <button onClick={resetTimer} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
