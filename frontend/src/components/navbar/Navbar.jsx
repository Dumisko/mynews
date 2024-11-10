import React, { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {getimageUrl} from "../../utils.js"
import closeimage from "../../assets/nav/close.png"
import menuimage from "../../assets/nav/menu.png"
import moonimg from "../../assets/nav/moon.png"
import sunimg from "../../assets/nav/sun.png"
import styles from "./Navbar.module.css"


function Navbar() {
  const [menuopen, setmenuopen] = useState(false);


  return (
    <nav className={styles.navbar}>

        <Link to='/logo' className={styles.logo}>logo</Link>
        <div className={styles.menu}>

        <img src={ menuopen ? closeimage : menuimage} alt="menu-button" className={styles.menuBtn} 
        onClick={()=> setmenuopen(!menuopen)}
        />

            <ul className={`${styles.menuitems} ${menuopen && styles.menuopen}`}
    onClick={()=>setmenuopen(false)}>
                <li><Link to="/"  className={styles.navlink}>Home</Link></li>
                <li><Link to="/sports" className={styles.navlink}>Sports</Link></li>
                <li><Link to="/world" className={styles.navlink}>World</Link></li>
                <li><Link to="/science" className={styles.navlink}>Science</Link></li>
                <li><Link to="/education" className={styles.navlink}>Education</Link></li>
                <li><Link to="/jobs" className={styles.navlink}>Jobs</Link></li>

            </ul>
        </div>

        <Outlet/>
      
    </nav>
  )
}

export default Navbar
