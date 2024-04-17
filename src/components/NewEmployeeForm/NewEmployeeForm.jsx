import React, {useState} from "react";

function NewEmployeeForm({onAddEmployee}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    password: "",
    position: "",
    schedule: "",
    workTime: 0,
    payPerHour: 0,
    timeInEvents : [],
    timeOutEvents : [],
    payForThisWeek: 0,
  })

  function handleChange(e) {
    if (e.target.name === "workTime" || e.target.name === "payPerHour" || e.target.name === "payforThisWeek") {
      const amt = e.target.value 
      if (amt === "" || amt === null) {
        setFormData({...formData, [e.target.name] : ""})
      } else {
        setFormData({
          ...formData,
          [e.target.name] : parseFloat(e.target.value),
        })
      }
      } else {
        setFormData({...formData, [e.target.name]: e.target.value })
      }
    }
    function handleSubmit(e) {
      e.preventDefault()

      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }

      fetch("/employees", configObj)
      .then(r => r.json())
      .then(employee => onAddEmployee(employee))

      setFormData({
        name: "",
    image: "",
    password: "",
    position: "",
    schedule: "",
    workTime: 0,
    payPerHour: 0,
    timeInEvents : [],
    timeOutEvents : [],
    payForThisWeek: 0,
      })
    }
  return (
    <div className="card1">
      <h2>New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} placeholder="Employee name" onChange={handleChange}/>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" value={formData.image}placeholder="Image URL" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={formData.password} placeholder="password" onChange={handleChange}/>
        <label htmlFor="position">Position</label>
        <input type="text" name="position" value={formData.position} placeholder="position" onChange={handleChange}/>
        <label htmlFor="schedule">Schedule</label>
        <input type="text" name="schedule" value={formData.schedule} placeholder="schedule" onChange={handleChange}/>
        <label htmlFor="workTime">Worktime</label>
        <input type="number" name="workTime" step="0.01" value={formData.workTime} placeholder="workTime" onChange={handleChange}/>
        <label htmlFor="payPerHour">Pay per Hour</label>
        <input type="number" name="payPerHour" step="0.01" value={formData.payPerHour} placeholder="payPerHour" onChange={handleChange}/>
        <label htmlFor="timeInEvents">Time in Events</label>
        <input type="text" name="timeInEvents" value={formData.timeInEvents} placeholder="timeInEvents" onChange={handleChange}/>
        <label htmlFor="timeOutEvents">Time Out Events</label>
        <input type="text" name="timeOutEvents" value={formData.timeOutEvents} placeholder="timeOutEvents" onChange={handleChange}/>
        <label htmlFor="payForThisWeek">Pay for this Week</label>
        <input type="number" name="payForThisWeek" step="0.01" value={formData.payForThisWeek} placeholder="payForThisWeek" onChange={handleChange}/>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default NewEmployeeForm;
