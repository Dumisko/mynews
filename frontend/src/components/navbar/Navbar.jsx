import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Navbar() {
  return (
    <nav>

        <div className='logo'>logo</div>
        <div className='navelements'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sports">Sports</a></li>
                <li><a href="#world">World</a></li>
                <li><a href="#science">Science</a></li>
            </ul>
        </div>

        <Outlet/>
      
    </nav>
  )
}

export default Navbar
