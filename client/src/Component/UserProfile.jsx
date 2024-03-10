import React, { useState } from "react";
import classNames from "classnames";
import { useStudy } from "../context/StudyGoal";
import {useContext} from "react"
import { UserContext } from "../context/userContext";
import {toast} from "react-hot-toast"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null); // New state for hovered event
  const [events, setEvents] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const {studygoal,StudyDispatch}=useStudy();
  const navigate=useNavigate()
  console.log(events);
  console.log(studygoal)
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getMonthData = (month, year) => {
    const firstDay = new Date(year, month).getDay();
    const days = daysInMonth(month, year);
    const data = [];

    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = Array(7).fill(null);

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) continue;
        if (day > days) break;

        week[j] = day;
        day++;
      }

      data.push(week);
    }

    return data;
  };

  const {user}=useContext(UserContext)
  const userId = user?.id;
  
  const Goal = async (event,time,key) => {
   
    const name=event;
    
    try{
       const data = await axios.put(`/event/${userId}`,{
        name,time,key
       })

       if(data.error){
        toast.error(data.error)
       }else{
        
        toast.success('event added added!')
        navigate('/Dashboard')
       }
       
    }catch(error){

    }
  }
  
  const handleDateClick = (day) => setSelectedDate(day);

  const handleEventAdd =  () => {
    const event = prompt("Enter event name:");
    const time = prompt("Enter event time (optional):");
    
    if (event && selectedDate !== null) {
      const key = `${currentYear}-${currentMonth + 1}-${selectedDate-1}`;
      Goal(event,time,key);

      setEvents((prevEvents) => ({
        ...prevEvents,
        [key]: { name: event, time: time || "All Day" },
      }));
      StudyDispatch({
        type:"STUDYGOAL",
        payload:{event,key}
      })
      setSelectedDate(null); // Clear selected date after adding an event
      
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthData = getMonthData(currentMonth, currentYear);

  const increaseMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    if ((currentMonth + 1) % 12 === 0)
      setCurrentYear((prevYear) => prevYear + 1);
  };

  const decreaseMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    if ((currentMonth - 1 + 12) % 12 === 11)
      setCurrentYear((prevYear) => prevYear - 1);
  };

  return (
    <div className="flex justify-end m-4 items-baseline max-h-screen ">
      <div className="container p-4 w-96 mr-8 bg-transparent rounded-2xl shadow-sm shadow-blue-200">
        <div className="mb-4 text-center flex justify-between">
          <button className="mr-2 text-white" onClick={decreaseMonth}>
            Previous Month
          </button>
          <h1 className="text-3xl font-semibold text-blue-200">
            {monthNames[currentMonth]} {currentYear}
          </h1>
          <button className="ml-2 text-white" onClick={increaseMonth}>
            Next Month
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-semibold text-white">
              {day}
            </div>
          ))}
          {monthData.map((week, index) => (
            <React.Fragment key={index}>
              {week.map((day, idx) => {
                const key = `${currentYear}-${currentMonth + 1}-${day}`;
                const event = events[key];

                return (
                  <div
                    key={idx}
                    className={classNames("py-1", {
                      "text-gray-400": !day,
                      "cursor-pointer hover:bg-red-700 rounded-full": day,
                      "bg-cyan-950 text-black": selectedDate === day,
                      "bg-green-700 rounded-full": event,
                    })}
                    onClick={() => handleDateClick(day)}
                    onMouseEnter={() => {
                      setHoveredDate(day);
                      setHoveredEvent(event);
                    }}
                    onMouseLeave={() => {
                      setHoveredDate(day);
                      setHoveredEvent(event);
                    }}
                  >
                    <span className="text-white">{day}</span>
                    {hoveredDate === day && hoveredEvent && (
                      <div className="text-xl text-blue-200 font-medium absolute right-24 bottom-14 w-64 border-2 border-blue-200 rounded-xl">
                        {hoveredEvent.name} ({hoveredEvent.time})
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            className="bg-pink-700 hover:bg-blue-600 transition ease-in-out duration-300 text-white font-semibold py-2 px-4 rounded-xl"
            onClick={handleEventAdd}
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;