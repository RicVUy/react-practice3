import React, { useState, useEffect } from 'react';

function TimeList() {
  const [timerData, setTimerData] = useState([]);

  useEffect(() => {
    // Fetch timer data from JSON database
    const data = JSON.parse(localStorage.getItem('timerData')) || [];
    setTimerData(data);
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setTimerData([]);
    };

  return (
    <div>
     <h2>Time Card</h2>
      <ul>
        {timerData.map((record, index) => (
          <li key={index}>
            <p>Time In: {record.startTime}</p>
            <p>Time Out: {record.endTime}</p>
            <p>Time at Work: {record.elapsedTime} min</p>
            <p>Total Time: {record.totalTime} hours</p>
            <p>Pay for this Week: ${record.payForThisWeek}</p>
          </li>
        ))}
        <button onClick={clearLocalStorage}>Delete Time Card</button>
      </ul>
    </div>
  );
}

export default TimeList;