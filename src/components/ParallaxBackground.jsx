import React, { useEffect, useState, useRef } from 'react'
import styles from './ParallaxBackground.module.css'
import { Parallax } from 'react-scroll-parallax';

export default function ParallaxBackground() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [isActive, setIsActive] = useState(true)
  
  useEffect(() => {
    if (windowSize.current[0] <= 768) {
      console.log("Less than 768")
      setIsActive(false)
    }
    document.querySelectorAll('*').forEach(elem => {
      if (elem.offsetWidth > document.documentElement.offsetWidth) {
          console.log('Problem child: ', elem);
      }
    });
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>Bryan Chhorb</span>
        <span className={styles.position}>Full Stack Developer</span>
      </div>
      <Parallax easeing={"linear"} speed={isActive ? -2 : 0} className={`${styles["bg-1"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -20 : 0} className={`${styles["bg-2"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -30 : 0} className={`${styles["bg-3"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -40 : 0} className={`${styles["bg-4"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -50 : 0} className={`${styles["bg-5"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -50 : 0} className={`${styles["bg-6"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -60 : 0} className={`${styles["bg-7"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -60 : 0} className={`${styles["bg-8"]} ${styles.all}`} />
      <Parallax easeing={"linear"} speed={isActive ? -60 : 0} className={`${styles["bg-gradient"]} ${styles.all}`} />
    </div>
  )
}
