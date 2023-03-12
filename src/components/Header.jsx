import React from 'react'
import styles from './Header.module.css'
import { Parallax } from 'react-scroll-parallax';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";

export default function Header({ imgUrl, swap }) {

  const titleCol =
    <div className={styles.title}>
      <Parallax className={styles.title} speed={-30}>
        TEST
      </Parallax>
    </div>

  const otherCol =
    <div className={styles.other}>
        <div className={styles.iconContainer}>
          <DiReact />
          <span>React.js</span>
        </div>
        <div className={styles.iconContainer}>
          <DiJavascript />
          <span>Javascript</span>
        </div>
        <div className={styles.iconContainer}>
          <DiCss3 />
          <span>CSS</span>
        </div>
        <div className={styles.iconContainer}>
          <DiHtml5 />
          <span>HTML5</span>
        </div>
        <div className={styles.iconContainer}>
          <DiNodejsSmall />
          <span>Node.js</span>
        </div>
    </div>

{/* <div className={styles.other}>
<Parallax className={styles.test} speed={5}>
  <div className={styles.iconContainer}>
    <DiReact />
    <span>React.js</span>
  </div>
</Parallax>
<Parallax speed={9}>
  <div className={styles.iconContainer}>
    <DiJavascript />
    <span>Javascript</span>
  </div>
</Parallax>
<Parallax speed={-10}>
  <div className={styles.iconContainer}>
    <DiCss3 />
    <span>CSS</span>
  </div>
</Parallax>
<Parallax speed={11}>
  <div className={styles.iconContainer}>
    <DiHtml5 />
    <span>HTML5</span>
  </div>
</Parallax>
<Parallax speed={-15}>
  <div className={styles.iconContainer}>
    <DiNodejsSmall />
    <span>Node.js</span>
  </div>
</Parallax>
</div>     */}
// style={{ "backgroundImage": `url("${imgUrl}")` }}
  return (
    <div style={{"--url": `url("${imgUrl}")`}} className={styles.container}>
      {swap ? otherCol : titleCol}
      {swap ? titleCol : otherCol}
    </div>
  )
}
