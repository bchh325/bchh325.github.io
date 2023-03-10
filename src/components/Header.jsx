import React from 'react'
import styles from './Header.module.css'

export default function Header({ imgUrl }) {
  console.log(`url("${imgUrl}")`)

  return (
    <div style={{ "backgroundImage": `url("${imgUrl}")` }} className={styles.container}><span>PROJECT TITLE</span></div>
  )
}
