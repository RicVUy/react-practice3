import React, { useState, useEffect } from 'react';
import TimeTracker from '../TimeTracker/TimeTracker';
import TimeList from '../TimeList/TimeList';
import '../login.css'
function EmployeeLogin({  setLoggedIn1 }) {
 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
 const [employees, setEmployees] = useState([])
  const [employeeData, setEmployeeData] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [logIn, setLogIn] = useState(false)
  

  useEffect(() => {
    fetch("http://localhost:3001/employees")
        .then(r => r.json())
        .then(setEmployees) 
        
  }, []);
console.log(employees)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = employees.find(user => user.name === name && user.password === password);

    if (user) {
      // Successful login
      setLoggedIn1(true);
      fetchEmployeeData(name);
      setLogIn(!logIn)
      setLoginError(loginError)
      } else {
       
  setLoginError('Invalid name or password');
     }};
  
  const fetchEmployeeData = (name) => {
    // Fetch employee data based on the provided name
    
    fetch(`/employees?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        // Assuming data is an array with one employee object
        console.log(data)
        if (data.length === 1) {
          setEmployeeData(data[0]);
        } else {
          setEmployeeData(null);
          setLoginError('Employee not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  return (
    <div>
      <div className='login'>
        <div className='login-container'>
      <h2>Employee Login</h2>
      <div className='login-fields'>
      <form onSubmit={handleFormSubmit}>
        <div>
         
          <input
            type="text"
            placeholder='Your name'
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
         
          <input
            type="password"
            placeholder='password'
            name="password"
            value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{logIn ? "Log out" : "Log in"}</button>
      </form>
      </div>
      {loginError && <p>{loginError}</p>}
      </div>
      </div>
      {employeeData && (
        <div className='card'>
          <h2>Employee Data</h2>
          <p>Name: {employeeData.name}</p>
          <img src={employeeData.image} alt={employeeData.name}/>
          <p>Password:{employeeData.password}</p>
          <p>Position: {employeeData.position}</p>
          <p>schedule:{employeeData.schedule}</p>
          <p>WorkTime:{employeeData.workTime}</p>
          <p>Pay per hour:${employeeData.payPerHour}</p>
          <p>Time In:{employeeData.timeInEvents}</p>
          <p>Time Out:{employeeData.timeOutEvents}</p>
          <p>Pay for this week: ${employeeData.payForThisWeek}</p>
           
         
        <div id="time-in-out">
      <TimeTracker />
      </div>
      <div id="time-in-out"> 
      <TimeList />
    </div>
           </div>
           )}
        
    </div>
  );
}

export default EmployeeLogin;

