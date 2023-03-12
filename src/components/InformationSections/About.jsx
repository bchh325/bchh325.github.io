import React, { useState } from 'react'
import styles from './About.module.css'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";

export default function About() {
  const [myInfo, setMyInfo] = useState([
    {
      header: "Header",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto illum, aliquam obcaecati qui facilis fuga id vero culpa, sed libero quod doloribus error molestiae neque, atque eveniet assumenda officia."
    },
  ])

  return (
    <div className={styles.container}>

      <div className={styles.flex}>
        <MdArrowBackIosNew className={styles.icon} />
      </div>
      <div className={styles.card}>
        <span>Header</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iusto illum, aliquam obcaecati qui facilis fuga id vero culpa, sed libero quod doloribus error molestiae neque, atque eveniet assumenda officia.
        </p>
        <div className={styles.pageIndicator}>
          <BsDashLg className={styles.icon} />
          <BsDashLg className={styles.icon} />
          <BsDashLg className={styles.icon} />
        </div>
      </div>
      <div className={styles.flex}>
        <MdArrowForwardIos className={styles.icon} />
      </div>

    </div>
  )
}
