import React, { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Nav() {
  const [hideNav, setHideNav] = useState(false)

  useEffect(() => {
    let prevScroll = 0
    window.onscroll = function () {
      const currentScroll = window.scrollY

      if (currentScroll === 0) {
        setHideNav(true)
      }
      if (currentScroll > prevScroll) {
        setHideNav(false)
      } else {
        setHideNav(true)
      }
      prevScroll = currentScroll
    }
  }, [])

  return (
    <div className={`${styles.navContent} ${!hideNav ? styles.collapse : ""}`}>
      <div className={styles.left}>
        <div className={styles.leftLinks}>
          <div className={styles.name}>
            <span>Bryan</span>
            <span>Chhorb</span>
          </div>
          <div className={styles.icon}><FaGithub color={"#00C6BC"} /></div>
          <div className={styles.icon}><FaLinkedinIn color={"#00C6BC"} /></div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <span>Me!</span>
          <span>Projects</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}
