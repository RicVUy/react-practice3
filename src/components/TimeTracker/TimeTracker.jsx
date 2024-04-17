import React, { useState, useEffect } from 'react';
import Clock from '../Clock/Clock';
import { employees1 } from '../data';

function TimeTracker() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [payForThisWeek, setPayForThisWeek] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  let existingData = []
  let totalTimeMin =0
  let duration = 0
 let totalTimeHour=0
  const handleStartClick = () => {
    setStartTime(Date.now());
  };

  const handleStopClick = () => {
    if (startTime) {
      setEndTime(Date.now());
      setTotalTime(totalTime + (Date.now() - startTime));
      
    }
  };



  useEffect(() => {
    if (endTime) {
       duration = endTime - startTime;
       let durationMin = (duration/60000).toFixed(2)
      setElapsedTime(durationMin);
      setPayForThisWeek(((totalTime/3600000)*(employees1[3].payPerHour)).toFixed(2))
    }
  }, [startTime, endTime]);
  
  const handleSaveClick = () => {
    if (elapsedTime > 0) {
      const newRecord = {
        startTime: new Date(startTime).toLocaleString(),
        endTime: new Date(endTime).toLocaleString(),
        elapsedTime: elapsedTime,
        totalTime: totalTimeHour,
        payForThisWeek: payForThisWeek
      };
    
      // Fetch existing timer data from JSON database
       existingData = JSON.parse(localStorage.getItem('timerData')) || [];

      // Add the new record to the array
      existingData.push(newRecord);

      // Update the JSON database
      localStorage.setItem('timerData', JSON.stringify(existingData));

      // Reset state
      setStartTime(null);
      setEndTime(null);
      setElapsedTime(0);
    }
  };
  totalTimeMin = (totalTime/60000).toFixed(2)
  totalTimeHour = (totalTimeMin/60).toFixed(2)
  /*const handleBothClick = () => {
    handleStopClick();
    handleSaveClick();
  }*/
  return (
    <div>
      <h2>Punch Clock</h2>
      <Clock/>
      <button onClick={handleStartClick}>Time In</button>
      
      <button onClick={handleStopClick}>Time Out</button>
      <button onClick={handleSaveClick}>Save</button>
      <div>
        {startTime && <p>Time In: {new Date(startTime).toLocaleString()}</p>}
        {endTime && <p>Time Out: {new Date(endTime).toLocaleString()}</p>}
        {elapsedTime > 0 && <p>Time at Work: {elapsedTime} min</p>}
        </div>
      <h2>Time At Work</h2>
      <h4>Total Time(minutes): {totalTimeMin}</h4>
      <h4>Total Time(hour): {totalTimeHour}</h4>
      <h4>Pay for this Week: ${payForThisWeek}</h4>
    </div>
  );
}

export default TimeTracker;
