import React from 'react'

function EmployeeCard ({employee,  onDeleteEmployee}) {
    const {
    id,    
    name,
    image,
    password,
    position,
    schedule,
    workTime,
    payPerHour,
    timeInEvents,
    timeOutEvents,
    payForThisWeek} = employee

  
      function handleDelete(params) {
        fetch(`/employees/${id}`, {
          method: "DELETE"
        })
        .then(onDeleteEmployee(id))
       }

    return (
        <div className="card">
          <h2>EMPLOYEE</h2>
           <ul>
           <li>NAME:{name}</li>
           <img src={image} alt={name} />
           <li>password:{password}</li>
           <li>position:{position}</li>
           <li>schedule:{schedule}</li>
           <li>WorkTime:{workTime}</li>
           <li>Pay per hour:${payPerHour}</li>
           <li>Time In:{timeInEvents}</li>
           <li>Time Out:{timeOutEvents}</li>
           <li>Pay for this week: ${payForThisWeek}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
         
        </div>   
       )
}

export default EmployeeCard