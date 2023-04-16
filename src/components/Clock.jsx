import React, { useState, useEffect } from "react";
import moment from 'moment/moment';

const Clock = ({ id, city, zone, onDelete }) => {
  const [time, setTime] = useState(zone);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    const newTime = moment(time)
    newTime.add(1, 'seconds');
    setTime(() => newTime);
  };

  const hours = time.hours();
  const minutes = time.minutes();
  const seconds = time.seconds(); 

  const hourAngle = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  const handleClick = () => { console.log(`Удалил ${ id }`); onDelete(id); }

  return (
    <div className="inline-block relative w-auto">
      <p className="absolute inline-block transform -translate-x-1/2 left-1/2">{ city }</p>
      <button 
        className="absolute inline-block transform -translate-x-1/2 -right-8 top-8"
        onClick={ handleClick }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <div className="mt-12 inline-block relative w-60 h-60 border-black border-2 rounded-full ">
          <div
            className="absolute w-1 h-20 bg-black transform origin-bottom -translate-x-1/2 bottom-1/2 left-1/2"
            style={{ transform: `rotate(${hourAngle}deg)` }}
          />
          <div
            className="absolute w-1 h-24 bg-slate-700 transform origin-bottom -translate-x-1/2 bottom-1/2 left-1/2"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
          />
          <div
            className="absolute w-1 h-28 bg-slate-500 transform origin-bottom -translate-x-1/2 bottom-1/2 left-1/2"
            style={{ transform: `rotate(${secondAngle}deg)` }}
          />
      </div>
    </div>
  );
};

export default Clock;