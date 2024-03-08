import React, { useEffect, useState } from 'react';
import { useStudy } from '../../context/StudyGoal';
import { parse, isSameDay } from 'date-fns';

function Current() {
  const { studygoal } = useStudy();
  const [list, setList] = useState([]);

  useEffect(() => {
    const currentDate = new Date();

    // Filter items where the key date is less than the current date
    const newList = studygoal.filter((item) => {
      const dateString = Object.keys(item)[0]; // Extract the date string from the key
      const itemDate = parse(dateString, 'yyyy-M-d', new Date()); // Parse the date string into a Date object
      return isSameDay(itemDate, currentDate); // Use isBefore for comparison
    });
    console.log(newList);
    setList(newList);
  }, [studygoal]);
  console.log(list);
  return (
    <div>
        <div className='flex'>
        <h1 className='text-xl font-bold text-white m-10' >Date</h1>
        <h1 className='text-xl font-bold text-white m-10'>Event</h1>
        </div>
    <div>
          {list.map((item, index) => {
        const dateString = Object.keys(item)[0];
        const value = item[dateString];

        return (
          <div key={index} className='flex'>
            <p className='text-lg font-semibold text-white m-10'>{dateString}</p>
            <p className='text-lg font-semibold text-white m-10'>{value}</p>
          </div>
        );
      })}

    </div>
    </div>
  );
}

export default Current;
