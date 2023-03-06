import React from "react";
import { useState } from "react";

function DisplayClock () {
  const [time, setTime] = useState(new Date());
  let hours = time.getHours();
  let mins = time.getMinutes();

  let updateTime = () => {
    setTime(new Date());
    hours = time.getHours();
    mins = time.getMinutes();
    
  }

  setInterval(updateTime, 1000*60);


  return (
    <div className="DisplayClock bg-red-200 h-9 m-2 rounded-full w-1/12 text-indigo-400 ">
      <h1>{hours} : {mins} </h1>
      <i className="fa-thin fa-clock"></i>
    </div>
  )

}


export default DisplayClock;