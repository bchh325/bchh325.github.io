import React from 'react'
import styles from './ParallaxBackground.module.css'
import { Parallax } from 'react-scroll-parallax';

export default function ParallaxBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>Bryan Chhorb</span>
        <span className={styles.position}>Full Stack Developer</span>
      </div>
      <Parallax speed={-3} className={`${styles["bg-1"]} ${styles.all}`} />
      <Parallax speed={-40} className={`${styles["bg-2"]} ${styles.all}`} />
      <Parallax speed={-50} className={`${styles["bg-3"]} ${styles.all}`} />
      <Parallax speed={-60} className={`${styles["bg-4"]} ${styles.all}`} />
      <Parallax speed={-70} className={`${styles["bg-5"]} ${styles.all}`} />
      <Parallax speed={-70} className={`${styles["bg-6"]} ${styles.all}`} />
      <Parallax speed={-80} className={`${styles["bg-7"]} ${styles.all}`} />
      <Parallax speed={-80} className={`${styles["bg-8"]} ${styles.all}`} />
      <Parallax speed={-80} className={`${styles["bg-gradient"]} ${styles.all}`} />
    </div>
  )
}
