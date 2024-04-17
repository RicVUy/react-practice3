import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav>
      <div className="top-links">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/EmployeeLogin">Employee login</Link></li>
          <li><Link to="/TimeTracker">Punch Clock</Link></li>
          <li><Link to="/TimeList">Time Card</Link></li>
        </ul>
      </div>
      </nav>
      <footer className="bottom-links">
        
        <ul>
          <li><Link to="/AdminLogin">Administration Login</Link></li>
          <li><Link to="/employeePage">All Employees</Link></li>
          <li><Link to="/employeeEdit">Employee Edit</Link></li>
          
        </ul>
      </footer>
      </>
  );
}

export default Navbar;