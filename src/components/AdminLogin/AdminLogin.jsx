import React, { useState, useEffect } from 'react';
import '../login.css'
function AdminLogin({ setLoggedIn })  {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [admins, setAdmins] = useState([])
     
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
      useEffect(() => {
        fetch("http://localhost:3001/admins")
            .then(r => r.json())
            .then(setAdmins) 
            
      }, []);
   
   const handleFormSubmit = (e) => {
        e.preventDefault();
       
        const user = admins.find(user => user.name === name && user.password === password);
        if (user) {
          // Successful login
          setLoggedIn(true);
          
          setLogIn(!logIn)
          setLoginError(loginError)
          } else {
           
      setLoginError('Invalid name or password');
    }
      }
    return (
      <div>
        <div className='login'>
          <div className='login-container'>
        <h3>Administrator Login</h3>
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
        
        <button type="submit">{logIn ? "Log out" : "Log in"}
       </button>
         </form>
      </div>
      </div>  
      </div>
      </div>
    );
  };
  export default AdminLogin