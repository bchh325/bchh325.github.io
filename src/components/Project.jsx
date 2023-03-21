import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";

import styles from './Project.module.css'

export default function Project({ obj }) {
  const imageRef = useRef(null)

  const [active, setActive] = useState(true)
  const [viewActive, setViewActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [ref, inView, entry] = useInView({ threshold: 0.10 })

  useEffect(() => {
    if (inView) {
      setViewActive(true)
    }
  }, [inView])

  const horizontalScroller = (arrowId) => {
    const currentRefChildren = imageRef.current.children

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

  const renderIndicators = () => {
    const iconArray = []

    for (let i = 0; i < 3; i++) {
      iconArray.push(
        <div className={`${styles.icon} ${styles.display}`}>
          <BsDashLg className={currentIndex === i ? styles.activeIndicator : ""} />
        </div>)
    }

    return iconArray
  }

  const renderSkills = () => {
    const skillsArray = []

    obj.skills.map((skill, index) => {
      const IconType = skill.iconName
      skillsArray.push(
        <div style={{ transitionDelay: `${index * 150}ms` }} className={`${styles.icon} ${styles.hide} ${viewActive ? styles.display : ""}`}>
          <IconType size={40} />
          <span>{skill.text}</span>
        </div>
      )
    })

    return skillsArray
  }

  const renderContent = () => {
    const contentArray = []

    obj.content.map((content, index) => {
      contentArray.push(
        <span style={{ transitionDelay: `${index * 150}ms` }} className={`${styles.hide} ${viewActive ? styles.display : ""}`}>{content}</span>
      )
    })

    return contentArray
  }

  return (
    <div ref={ref} className={`${styles.container} ${viewActive ? styles.active : ""}`}>
      <div className={styles.projectName}>
        <div>{obj.name}</div>
        <div>{obj.desc}</div>
      </div>
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
              {renderIndicators()}
            </div>
            <div ref={imageRef} className={styles.images}>
              <div style={{ "backgroundImage": `url("${obj.images.url1}")` }} data-state={"current"} />
              <div style={{ "backgroundImage": `url("${obj.images.url2}")` }} data-state={"left"} />
              <div style={{ "backgroundImage": `url("${obj.images.url3}")` }} data-state={"right"} />
            </div>
          </div>
        </div>
        <div className={styles.techContainer}>
          {renderSkills()}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoContent}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
