import React, { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav({ refs }) {
  const [hideNav, setHideNav] = useState(false)
  const [hideMobile, setHideMobile] = useState(true)

  const { aboutRef, projectRef, contactRef } = refs

  useEffect(() => {
    let prevScroll = 0
    window.addEventListener('scroll', navScroll)
    function navScroll () {
      const currentScroll = window.scrollY

      if (currentScroll > prevScroll) {
        setHideNav(true)
      } else {
        setHideNav(false)
      }
      prevScroll = currentScroll
    }
  }, [])

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView()
    setHideMobile(true)
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }

  const handleNav = () => {
    setHideMobile(prev => !prev)
  }

  return (
    <>
      <div onClick={handleNav} className={`${styles.navHandler} ${styles.icon} ${!hideMobile ? styles.show : styles.hide}`}>
        <AiOutlineClose />
      </div>
      <div onClick={handleNav} className={`${styles.navHandler} ${styles.icon} ${!hideMobile ? styles.hide : styles.show}`}>
        <RxHamburgerMenu />
      </div>
      <div className={`${styles.navContent} ${hideNav ? styles.collapse : ""} ${hideMobile ? styles.collapseMobile : ""}`}>
        <div className={styles.left}>
          <div className={styles.leftLinks}>
            <div className={styles.name}>
              <span>Bryan</span>
              <span>Chhorb</span>
            </div>
            <div onClick={onClickUrl("https://github.com/bchh325")} className={styles.icon}><FaGithub color={"#00C6BC"} /></div>
            <div onClick={onClickUrl("https://www.linkedin.com/in/bryanmtxd/")} className={styles.icon}><FaLinkedinIn color={"#00C6BC"} /></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <span onClick={() => scrollIntoView(aboutRef)}>Me!</span>
            <span onClick={() => scrollIntoView(projectRef)}>Projects</span>
            <span onClick={() => scrollIntoView(contactRef)}>Contact</span>
            <span>Resume</span>
          </div>
        </div>
      </div>
    </>
  )
}
