import React, { useEffect, useState, useRef } from 'react'
import styles from './ParallaxBackground.module.css'
import { Parallax } from 'react-scroll-parallax';
import { AiOutlineDown } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";

export default function ParallaxBackground() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [isActive, setIsActive] = useState(true)
  const [hideArrow, setHideArrow] = useState(false)

  useEffect(() => {
    let prevScroll = 0
    window.addEventListener('scroll', arrowDown)
    function arrowDown () {
      const currentScroll = window.scrollY

      if (currentScroll > prevScroll) {
        setHideArrow(true)
      } else if (currentScroll <= 500) {
        setHideArrow(false)
      }
      prevScroll = currentScroll
    }
  }, [])

  useEffect(() => {
    if (windowSize.current[0] <= 768) {
      setIsActive(false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>Bryan Chhorb</span>
        <span className={styles.position}>Full Stack Developer</span>
        <div className={`${styles.arrow} ${hideArrow ? styles.hide : ""}`}>
          <BsChevronCompactDown />
        </div>
      </div>
      <Parallax easeing={"linear"} speed={isActive ? -5 : 0} className={`${styles["bg-1"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -30 : 0} className={`${styles["bg-2"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -40 : 0} className={`${styles["bg-3"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -50 : 0} className={`${styles["bg-4"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -60 : 0} className={`${styles["bg-5"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -60 : 0} className={`${styles["bg-6"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -70 : 0} className={`${styles["bg-7"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -70 : 0} className={`${styles["bg-8"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -70 : 0} className={`${styles["bg-gradient"]} ${styles.all}`} />
    </div>
  )
}
