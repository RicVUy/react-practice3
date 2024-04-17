import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard';

function EmployeeList({employees, onUpdateEmployee, onDeleteEmployee}) {

    const employeeList = employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} onUpdateEmployee={onUpdateEmployee} onDeleteEmployee={onDeleteEmployee}/>)
  return (
    <ul className="cards">{employeeList}</ul>
  )
}

export default EmployeeList;