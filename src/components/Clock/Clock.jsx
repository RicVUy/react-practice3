import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  const formattedTime = time.toLocaleString(undefined, {
    weekday: 'short', 
    month: 'short',   
    day: '2-digit',   
    year: 'numeric', 
    hour: '2-digit',  
    minute: '2-digit', 
    second: '2-digit', 
  })
  return <div>{formattedTime.toString()}</div>;
}


export default Clock;