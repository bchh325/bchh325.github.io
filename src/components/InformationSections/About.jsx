import React, { useState } from 'react'
import styles from './About.module.css'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";

export default function About({ active, numItems, delay }) {
  const [myInfo, setMyInfo] = useState([
    {
      header: "Header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto illum, aliquam obcaecati qui facilis fuga id vero culpa, sed libero quod doloribus error molestiae neque, atque eveniet assumenda officia."
    },
  ])

  console.log(active)

  return (
    <div className={styles.container}>
      <span style={{ transitionDelay: `${(numItems + 1) * delay}ms` }} className={`${active ? styles.display : ""} ${styles.header} ${styles.hide}`}>
        Header
      </span>
      <div style={{ transitionDelay: `${(numItems + 2) * delay}ms` }} className={`${styles.flex} ${styles.arrowL} ${active ? styles.display : ""} ${styles.hide}`}>
        <MdArrowBackIosNew className={styles.icon} />
      </div>
      <div style={{ transitionDelay: `${(numItems + 3) * delay}ms` }} className={`${styles.card} ${active ? styles.display : ""} ${styles.hide}`}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto illum, aliquam obcaecati qui facilis fuga id vero culpa, sed libero quod doloribus error molestiae neque, atque eveniet assumenda officia.
        </div>
      </div>
      <div style={{ transitionDelay: `${(numItems + 4) * delay}ms` }} className={`${styles.flex} ${styles.arrowR} ${active ? styles.display : ""} ${styles.hide}`}>
        <MdArrowForwardIos className={styles.icon} />
      </div>
      <div style={{ transitionDelay: `${(numItems + 5) * delay}ms` }} className={`${styles.pageIndicator} ${active ? styles.display : ""} ${styles.hide}`}>
        <BsDashLg className={styles.icon} />
        <BsDashLg className={styles.icon} />
        <BsDashLg className={styles.icon} />
      </div>
    </div>
  )
}
