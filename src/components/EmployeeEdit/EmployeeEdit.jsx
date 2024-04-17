import React, { useState } from 'react';

function EmployeeEdit() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fetch employee data based on the entered ID
    fetch(`employees/${employeeId}`)
      .then((resp) => {
        if (resp.status === 404) {
          throw new Error('Employee not found');
        }
        return resp.json();
      })
      .then((data) => {
        setEmployeeData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  const handleUpdateEmployee = (updatedData) => {
    // Send a PATCH request to update the employee using updatedData
    fetch(`/employees/${employeeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Handle the response from the server, if needed
        console.log('Employee updated:', data);
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };
       
  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
        </div>
        <button type="submit">Fetch Employee</button>
      </form>

      {employeeData && (
        <EmployeeUpdateForm
          employeeData={employeeData}
          onUpdateEmployee={handleUpdateEmployee}
        />
      )}
    </div>
  );
}

function EmployeeUpdateForm({ employeeData, onUpdateEmployee }) {
  // Create state variables for the fields  to update
  //const [id, setId] = useState(employeeData.id);
  const [name, setName] = useState(employeeData.name);
  const [image, setImage] = useState(employeeData.image);
  const [userName, setUserName] = useState(employeeData.userName);
  const [password, setPassword] = useState(employeeData.password);
  const [position, setPosition] = useState(employeeData.position);
  const [schedule, setSchedule] = useState(employeeData.schedule);
  const [workTime, setWorkTime] = useState(employeeData.workTime);
  const [payPerHour, setPayPerHour] = useState(employeeData.payPerHour);
  const [timeInEvents, setTimeInEvents] = useState(employeeData.timeInEvents);
  const [timeOutEvents, setTimeOutEvents] = useState(employeeData.timeOutEvents);
  const [payForThisWeek, setPayForThisWeek] = useState(employeeData.payForThisWeek);
  
  

  const handleUpdateClick = () => {
    // Construct updatedData object with the fields  to update
    const updatedData = {
      name,
      image,
      userName,
    password,
    position,
    schedule,
    workTime,
    payPerHour,
    timeInEvents,
    timeOutEvents,
    payForThisWeek,
      
    };

    onUpdateEmployee(updatedData);
  };
 
  return (
    <div>
      <h3>Employee Details</h3>
      <p>ID: {employeeData.id}</p>
      <div>
        <label>Name:</label>
        <input type="text" value={name} 
        onChange={(e) => setName(e.target.value)} />
        
      </div>
      <div>
        <label>Image:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>userName:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label>password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
      <div>
        <label>schedule:</label>
        <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
      </div>
      <div>
        <label>Worktime:</label>
        <input type="text" value={workTime} onChange={(e) => setWorkTime(e.target.value)} />
      </div>
      <div>
        <label>payPerHour:</label>
        <input type="text" value={payPerHour} onChange={(e) => setPayPerHour(e.target.value)} />
      </div>
      <div>
        <label>timeInEvents:</label>
        <input type="text" value={timeInEvents} onChange={(e) => setTimeInEvents(e.target.value)} />
      </div>
      <div>
        <label>timeOutEvents:</label>
        <input type="text" value={timeOutEvents} onChange={(e) => setTimeOutEvents(e.target.value)} />
      </div>
      <div>
        <label>payForThisWeek:</label>
        <input type="text" value={payForThisWeek} onChange={(e) => setPayForThisWeek(e.target.value)} />
      </div>

      
      <button onClick={handleUpdateClick}>Update Employee</button>
      
    </div>
  );
}

export default EmployeeEdit;
