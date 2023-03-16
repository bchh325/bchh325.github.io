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
  const [currentIndex, setCurrentIndex] = useState(0)

  const contentRef = useRef(null)
  const headerRef = useRef(null)

  const scroller = (arrowId) => {
    console.log(arrowId)

    const maxLength = contentRef.current.children.length
    const contentChildren = contentRef.current.children
    const headerChildren = headerRef.current.children

    let currentIndex
    let leftIndex
    let rightIndex

    for (let i = 0; i < maxLength; i++) {
      if (contentChildren[i].dataset.state === "current") {
        currentIndex = i
      }
      if (contentChildren[i].dataset.state === "left") {
        leftIndex = i
      }
      if (contentChildren[i].dataset.state === "right") {
        rightIndex = i
      }
      contentChildren[i].dataset.disabletransition = "false"
      headerChildren[i].dataset.disabletransition = "false"
    }

    if (arrowId === 1) {
      if (currentIndex === 0) {
        setCurrentIndex(2)
      } else {
        setCurrentIndex(prev => prev - 1)
      }

      contentChildren[leftIndex].dataset.disabletransition = "true"
      headerChildren[leftIndex].dataset.disabletransition = "true"

      contentChildren[currentIndex].dataset.state = "left"
      contentChildren[rightIndex].dataset.state = "current"
      contentChildren[leftIndex].dataset.state = "right"

      headerChildren[currentIndex].dataset.state = "left"
      headerChildren[rightIndex].dataset.state = "current"
      headerChildren[leftIndex].dataset.state = "right"
    }
    else if (arrowId === 2) {
      if (currentIndex === 2) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(prev => prev + 1)
      }

      contentChildren[rightIndex].dataset.disabletransition = "true"
      headerChildren[rightIndex].dataset.disabletransition = "true"

      contentChildren[currentIndex].dataset.state = "right"
      contentChildren[rightIndex].dataset.state = "left"
      contentChildren[leftIndex].dataset.state = "current"

      headerChildren[currentIndex].dataset.state = "right"
      headerChildren[rightIndex].dataset.state = "left"
      headerChildren[leftIndex].dataset.state = "current"
    }  
  }

  return (
    <div className={styles.container}>
      <div ref={headerRef} style={{ transitionDelay: `${(numItems + 1) * delay}ms` }} className={`${active ? styles.display : ""} ${styles.header} ${styles.hide} ${styles.scrollContent}`}>
          <div data-state={"current"}>Header 1</div>
          <div data-state={"left"}>Header 2</div>
          <div data-state={"right"}>Header 3</div>
      </div>
      <div onClick={() => scroller(1)} style={{ transitionDelay: `${(numItems + 2) * delay}ms` }} className={`${styles.flex} ${styles.arrowL} ${active ? styles.display : ""} ${styles.hide}`}>
        <MdArrowBackIosNew className={styles.icon} />
      </div>
      <div style={{ transitionDelay: `${(numItems + 3) * delay}ms` }} className={`${styles.card} ${active ? styles.display : ""} ${styles.hide}`}>
        <div ref={contentRef} className={styles.scrollContent}>
          <div data-state={"current"}>First Content  </div>
          <div data-state={"left"}>Second Content </div>
          <div data-state={"right"}>Third Content </div>
        </div>
      </div>
      <div onClick={() => scroller(2)} style={{ transitionDelay: `${(numItems + 4) * delay}ms` }} className={`${styles.flex} ${styles.arrowR} ${active ? styles.display : ""} ${styles.hide}`}>
        <MdArrowForwardIos className={styles.icon} />
      </div>
      <div style={{ transitionDelay: `${(numItems + 5) * delay}ms` }} className={`${styles.pageIndicator} ${active ? styles.display : ""} ${styles.hide}`}>
        <BsDashLg className={`${styles.icon} ${currentIndex === 0 ? styles.activeIndicator : ""}`} />
        <BsDashLg className={`${styles.icon} ${currentIndex === 1 ? styles.activeIndicator : ""}`} />
        <BsDashLg className={`${styles.icon} ${currentIndex === 2 ? styles.activeIndicator : ""}`} />
      </div>
    </div>
  )
}
