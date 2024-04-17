import React, {useState, useEffect} from 'react'
import EmployeeList from '../EmployeeList/EmployeeList'
import NewEmployeeForm from '../NewEmployeeForm/NewEmployeeForm'
import SearchEmployee from '../SearchEmployee/SearchEmployee'
import EmployeeEdit from '../EmployeeEdit/EmployeeEdit'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
     useEffect(() => {
        fetch("/employees")
        .then(r => r.json())
        .then(setEmployees) 
          },[])

          function handleAddEmployee (newEmployee) {
            setEmployees([...employees, newEmployee])
            }  

            function handleUpdatedEmployee(updatedEmployee){
              const updatedEmployees = employees.map((employee) => {
                if (employee.id === updatedEmployee.id) {
                  return updatedEmployee
                 } else {
                  return employee
                 }
              })
              setEmployees(updatedEmployees)
              }

              function handleDeleteEmployee(id) {
                const filteredEmployees = employees.filter(employee => employee.id !== id)
                setEmployees(filteredEmployees)
              }

  const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))          
 

  return (
    <main>
      <div id='employeeForm'>
      <SearchEmployee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div>
        <EmployeeList 
        employees={filteredEmployees} 
         //onSearchEmployee={handleSearchEmployeeByID}
        onUpdateEmployee={handleUpdatedEmployee}
        onDeleteEmployee={handleDeleteEmployee}
        />
        </div>
        <div id="employeeForm">
       <NewEmployeeForm onAddEmployee={handleAddEmployee}/>
       </div>
       <div className="edit-employee-form-section">
        <EmployeeEdit/>
       </div>
        
        </main>
  )
}

export default EmployeePage