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

        <a href='/logo' className={styles.logo}>logo</a>
        <div className={styles.menu}>

        <img src={ menuopen ? closeimage : menuimage} alt="menu-button" className={styles.menuBtn} 
        onClick={()=> setmenuopen(!menuopen)}
        />

            <ul className={`${styles.menuitems} ${menuopen && styles.menuopen}`}
    onClick={()=>setmenuopen(false)}>
                <li><a href="#home"  className={styles.navlink}>Home</a></li>
                <li><a href="#sports" className={styles.navlink}>Sports</a></li>
                <li><a href="#world" className={styles.navlink}>World</a></li>
                <li><a href="#science" className={styles.navlink}>Science</a></li>
                <li><a href="#education" className={styles.navlink}>Education</a></li>
                <li><a href="#jobs" className={styles.navlink}>Jobs</a></li>

                {/*  <li><img src=''/></li> */ }


            </ul>
        </div>

        <Outlet/>
      
    </nav>
  )
}

export default Navbar
