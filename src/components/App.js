import React, {useState} from 'react';
import './index.css';
import EmployeePage from './EmployeePage/EmployeePage';
import Header from './Header/Header';
import EmployeeEdit from './EmployeeEdit/EmployeeEdit';
import EmployeeLogin from './EmployeeLogin/EmployeeLogin';
import TimeTracker from './TimeTracker/TimeTracker';
import TimeList from './TimeList/TimeList';
import AdminLogin from './AdminLogin/AdminLogin';
import Navbar from './Navbar/Navbar';
import {Route, Switch, Redirect} from "react-router-dom";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn1, setLoggedIn1] = useState(false);
  return (
    <div>
    <Navbar />
      <Switch>
      <Route path="/EmployeeLogin">
          <EmployeeLogin isLoggedIn1={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
        </Route>
        <Route  path="/TimeTracker">
        {isLoggedIn1 ? <TimeTracker /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route  path="/TimeList"> 
         {isLoggedIn1 ? <TimeList /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route path="/EmployeePage">
        {isLoggedIn ? <EmployeePage /> : <Redirect to="/AdminLogin" />}
      </Route>
      
        <Route path="/EmployeeEdit">
        {isLoggedIn ? <EmployeeEdit /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  )
  
}

 

export default App;
