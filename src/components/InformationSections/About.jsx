import React, { useRef, useState } from 'react'
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

  const contentRef = useRef(null)

  const scroller = (arrowId) => {
    console.log(arrowId)
    console.log(contentRef.current.children)

    const maxLength = contentRef.current.children.length
    const children = contentRef.current.children

    let currentIndex
    let leftIndex
    let rightIndex

    for (let i = 0; i < maxLength; i++) {
      if (children[i].dataset.state === "current") {
        currentIndex = i
      }
      if (children[i].dataset.state === "left") {
        leftIndex = i
      }
      if (children[i].dataset.state === "right") {
        rightIndex = i
      }
      children[i].dataset.disabletransition = "false"
    }

    if (arrowId === 1) {
      // if (currentIndex === 0) {
      //   setCurrentIndex(2)
      // } else {
      //   setCurrentIndex(prev => prev - 1)
      // }

      children[leftIndex].dataset.disabletransition = "true"

      children[currentIndex].dataset.state = "left"
      children[rightIndex].dataset.state = "current"
      children[leftIndex].dataset.state = "right"
    }
    else if (arrowId === 2) {
      // if (currentIndex === 2) {
      //   setCurrentIndex(0)
      // } else {
      //   setCurrentIndex(prev => prev + 1)
      // }

      children[rightIndex].dataset.disabletransition = "true"

      children[currentIndex].dataset.state = "right"
      children[rightIndex].dataset.state = "left"
      children[leftIndex].dataset.state = "current"
    }  
  }

  return (
    <div className={styles.container}>
      <span style={{ transitionDelay: `${(numItems + 1) * delay}ms` }} className={`${active ? styles.display : ""} ${styles.header} ${styles.hide}`}>
        Header
      </span>
      <div onClick={() => scroller(1)} style={{ transitionDelay: `${(numItems + 2) * delay}ms` }} className={`${styles.flex} ${styles.arrowL} ${active ? styles.display : ""} ${styles.hide}`}>
        <MdArrowBackIosNew className={styles.icon} />
      </div>
      <div style={{ transitionDelay: `${(numItems + 3) * delay}ms` }} className={`${styles.card} ${active ? styles.display : ""} ${styles.hide}`}>
        <div ref={contentRef} className={styles.paragraphs}>
          <div data-state={"current"}>First Content  </div>
          <div data-state={"left"}>Second Content </div>
          <div data-state={"right"}>Third Content </div>
        </div>
      </div>
      <div onClick={() => scroller(2)} style={{ transitionDelay: `${(numItems + 4) * delay}ms` }} className={`${styles.flex} ${styles.arrowR} ${active ? styles.display : ""} ${styles.hide}`}>
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
