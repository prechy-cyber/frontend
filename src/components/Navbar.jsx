import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav>
        <h1>Home</h1>

        <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/signin">Login</Link></li>
               <li><Link to="/signup">Register</Link></li>
        </ul>
      </nav>
    
  )
}

export default  Navbar