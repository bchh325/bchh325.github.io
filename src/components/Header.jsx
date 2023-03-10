import React from 'react'
import styles from './Header.module.css'
import { Parallax } from 'react-scroll-parallax';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall  } from "react-icons/di";

export default function Header({ imgUrl, swap }) {

  const titleCol =
    <div className={styles.title}>
      <Parallax className={styles.title} translateY={[-100, 140]}>
        TEST
      </Parallax>
    </div>

  const otherCol =
    <div className={styles.other}>
      <Parallax speed={5}>
        <DiReact />
      </Parallax>
      <Parallax speed={9}>
        <DiJavascript />
      </Parallax>
      <Parallax speed={-10}>
        <DiCss3 />
      </Parallax>
      <Parallax speed={11}>
        <DiHtml5 />
      </Parallax>
      <Parallax speed={-15}>
        <DiNodejsSmall />
      </Parallax>
    </div>

  return (
    <div style={{ "backgroundImage": `url("${imgUrl}")` }} className={styles.container}>
      {swap ? otherCol : titleCol}
      {swap ? titleCol : otherCol}
    </div>
  )
}
