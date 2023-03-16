import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';

import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { FaUserLock } from 'react-icons/fa'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";

import styles from './Project.module.css'

export default function Project() {
  const imageRef = useRef(null)

  const [active, setActive] = useState(true)
  const [viewActive, setViewActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [ref, inView, entry] = useInView({ threshold: 0.25 })

  const skills = [
    {
      iconName: DiReact,
      text: "React.js"
    },
    {
      iconName: DiNodejsSmall,
      text: "Node.js"
    },
    {
      iconName: SiExpress,
      text: "Express.js"
    },
    {
      iconName: SiMongodb,
      text: "MongoDB"
    },
    {
      iconName: FaUserLock,
      text: "OAuth (PKCE)"
    }
  ]


  const horizontalScroller = (arrowId) => {
    const currentRefChildren = imageRef.current.children

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
      if (currentIndex === 0) {
        setCurrentIndex(2)
      } else {
        setCurrentIndex(prev => prev - 1)
      }

      currentRefChildren[leftIndex].dataset.disabletransition = "true"

      currentRefChildren[currentIndex].dataset.state = "left"
      currentRefChildren[rightIndex].dataset.state = "current"
      currentRefChildren[leftIndex].dataset.state = "right"
    }
    else if (arrowId === 2) {
      if (currentIndex === 2) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(prev => prev + 1)
      }

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

  useEffect(() => {
    if (inView) {
      setViewActive(true)
      console.log(entry)
    }
  }, [inView])

  const url1 = "https://camo.githubusercontent.com/bc13101fc25b01f6c8b18dc16b3b240c58e07af83825185e5c22f891b5e2f9e3/68747470733a2f2f692e696d6775722e636f6d2f47366a485671702e706e67"
  const url2 = "https://camo.githubusercontent.com/c6038b64f8717ec3cabbea4bd575bca6aff0132989a12b21c04a972fef4fd0b8/68747470733a2f2f692e696d6775722e636f6d2f4e736d685935792e706e67"
  const url3 = "https://i.imgur.com/5UFIqRr.png"

  return (
    <div ref={ref} className={`${styles.container} ${viewActive ? styles.active : ""}`}>
      <span className={styles.projectName}>Project Name</span>
      <div className={styles.content}>
        <div className={styles.flex}>
          <div className={styles.scrollContainer}>
            <div onClick={() => handleClick(2)} className={`${styles.arrow} ${styles.right}`}>
              <MdArrowForwardIos />
            </div>
            <div onClick={() => handleClick(1)} className={`${styles.arrow} ${styles.left}`}>
              <MdArrowBackIosNew />
            </div>
            <div className={styles.indicator}>
              <div className={`${styles.icon} ${styles.display}`}>
                <BsDashLg className={currentIndex === 0 ? styles.activeIndicator : ""} />
              </div>
              <div className={`${styles.icon} ${styles.display}`}>
                <BsDashLg className={currentIndex === 1 ? styles.activeIndicator : ""} />
              </div>
              <div className={`${styles.icon} ${styles.display}`}>
                <BsDashLg className={currentIndex === 2 ? styles.activeIndicator : ""} />
              </div>
            </div>
            <div ref={imageRef} className={styles.images}>
              <div style={{ "backgroundImage": `url("${url1}")` }} data-state={"current"}>CURRENT</div>
              <div style={{ "backgroundImage": `url("${url2}")` }} data-state={"left"}>left</div>
              <div style={{ "backgroundImage": `url("${url3}")` }} data-state={"right"}>right</div>
            </div>
          </div>
        </div>
        <div className={styles.techContainer}>
          {skills.map((skill, index) => {
            const IconType = skill.iconName
            return (
              <div style={{ transitionDelay: `${index * 175}ms` }} className={`${styles.icon} ${viewActive ? styles.display : ""}`}>
                <IconType size={40} />
                <span>{skill.text}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoContent}>
            <span>Backend for Frontend Proxy created using Node.js and Express.js to interact with Spotify's Web API</span>
            <span>Adds security using OAuth 2.0 Authorization Code Flow with PKCE (Proof Key for Code Exchange), which prevents exposure of tokens on client-side and prevents CSRF attacks</span>
            <span>Separated endpoints created to request from Spotify's Authorization Servers and Web API</span>
            <span>Session data (Refresh and Access Tokens) stored in MongoDB, while Session ID is stored in httpOnly cookie on the browser</span>
            <span>Data parsing to create batches of params for API calls given a previous request to handle API limitations (ex. 50 song IDs / request, needs multiple requests to get full data)</span>
            <span>Data parsing to extract relevant user playlist genre data and structure it in a usable "key:value" object to provide a visualization to the user</span>
            <span>Caching API requests to both decrease server load and to increase load times on the client</span>
            <span>State management using Redux</span>
          </div>
        </div>
      </div>
    </div>
  )
}
