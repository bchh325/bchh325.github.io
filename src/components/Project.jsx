import React, { useEffect, useRef, useState } from 'react'

import styles from './Project.module.css'

import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { FaUserLock } from 'react-icons/fa'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Project() {
  const imageRef = useRef(null)
  const [active, setActive] = useState(true)

  const backgrounds = [
    "background-color: green",
    "background-color: red",
    "background-color: blue"
  ]

  const horizontalScroller = (arrowId) => {
    const currentRefChildren = imageRef.current.children
    const maxIndex = imageRef.current.children.length - 1

    console.log(currentRefChildren)
    let currentIndex
    let leftIndex
    let rightIndex

    setActive(false)

    setTimeout(() => {
      setActive(true)
    }, "275");

    for (let i = 0; i < imageRef.current.children.length; i++) {
      if (currentRefChildren[i].dataset.state === "current") {
        currentIndex = i
      }
      if (currentRefChildren[i].dataset.state === "left") {
        leftIndex = i
      }
      if (currentRefChildren[i].dataset.state === "right") {
        rightIndex = i
      }
      currentRefChildren[i].dataset.disabletransition = "false"
    }

    if (arrowId === 1) {
      currentRefChildren[leftIndex].dataset.disabletransition = "true"

      currentRefChildren[currentIndex].dataset.state = "left"
      currentRefChildren[rightIndex].dataset.state = "current"
      currentRefChildren[leftIndex].dataset.state = "right"
    }
    else if (arrowId === 2) {
      currentRefChildren[rightIndex].dataset.disabletransition = "true"

      currentRefChildren[currentIndex].dataset.state = "right"
      currentRefChildren[rightIndex].dataset.state = "left"
      currentRefChildren[leftIndex].dataset.state = "current"
    }

  }

  const handleClick = (id) => {
    if (active) {
      horizontalScroller(id)
    }
  }

  const url1 = "https://fastly.picsum.photos/id/808/2560/1440.jpg?hmac=AFgVNKQNTmZBsG1yVwd1cVvrxTcQeB3oGD0nuTTAaTM"
  const url2 = "https://fastly.picsum.photos/id/981/2560/1440.jpg?hmac=UErIUvMY2cY7csDk13VBhHJBXdvaTlMHn_Ban5Am958"
  const url3 = "https://fastly.picsum.photos/id/452/2560/1440.jpg?hmac=2AunNZaOPJY-r9nfZ__Q_bvrQdUdwZyyPW9VNQI1-fs"

  return (
    <div className={styles.container}>
      <span>Project Name</span>
      <div className={styles.content}>
        <div className={styles.flex}>
          <div className={styles.scrollContainer}>
            <div ref={imageRef} className={styles.images}>
              <div style={{"backgroundImage": `url("${url1}")`}} data-state={"current"}>CURRENT</div>
              <div style={{"backgroundImage": `url("${url2}")`}} data-state={"left"}>left</div>
              <div style={{"backgroundImage": `url("${url3}")`}} data-state={"right"}>right</div>
            </div>
            <div onClick={() => handleClick(2)} className={`${styles.arrow} ${styles.right}`}>
              <MdArrowForwardIos />
            </div>
            <div onClick={() => handleClick(1)} className={`${styles.arrow} ${styles.left}`}>
              <MdArrowBackIosNew />
            </div>
          </div>
        </div>
        <div className={styles.techContainer}>
          <div className={styles.icon}>
            <DiReact />
            <span>React.js</span>
          </div>
          <div className={styles.icon}>
            <DiNodejsSmall />
            <span>Node.js</span>
          </div>
          <div className={styles.icon}>
            <SiExpress />
            <span>Express.js</span>
          </div>
          <div className={styles.icon}>
            <SiMongodb />
            <span>MongoDB</span>
          </div>
          <div className={styles.icon}>
            <FaUserLock />
            <span>OAuth (PKCE)</span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          info
        </div>
      </div>
    </div>
  )
}
