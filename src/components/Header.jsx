import React from 'react'
import styles from './Header.module.css'
import { Parallax } from 'react-scroll-parallax';

export default function Header({ imgUrl }) {

  return (
    <div style={{ "backgroundImage": `url("${imgUrl}")` }} className={styles.container}>
      <Parallax speed={5}>
        <span>PROJECT</span>
      </Parallax>
      <Parallax speed={-5}>
        <span>PROJECT</span>
      </Parallax>
      <Parallax speed={-15}>
        <span>PROJECT</span>
      </Parallax>
    </div>
  )
}
