import React, { useEffect, useState } from 'react'
import styles from './ProjectItem.module.css'
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

export default function ProjectItem({ swap }) {
    const [active, setActive] = useState(false)
    const [ref, inView, entry] = useInView()

    useEffect(() => {
        if (inView) {
            setActive(true)
        }
    }, [inView])

    

    const swapStyle = swap ? styles.leftEdgeStyle : styles.rightEdgeStyle

    const projectCol = <div ref={ref} className={`${styles.left} ${swapStyle} ${active ? styles.moveToOriginal : ""}`}>
        <div className={styles.cardContainer}>
            <div className={styles.card}>Project Img 1</div>
            <div className={styles.card}>Project Img 2</div>
            <div className={styles.card}>Project Img 3</div>
            <div className={styles.tech}>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
            </div>
        </div>
        <div className={styles.projectInformation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus laboriosam voluptatem saepe consectetur vel itaque distinctio aspernatur, illo tempora eos ut facilis? Optio accusantium temporibus voluptas sed laudantium laboriosam!
        </div>
    </div>

    const projectInfoCol =
    <div className={styles.rightContainer}>
        <div className={`${styles.right} ${swapStyle} ${active ? styles.moveToOriginal : ""}`}>
            <div>
                <span>Features</span>
            </div>
            <div>
                <span>Stuff</span>
                <span>Stuff</span>
                <span>Stuff</span>
                <span>Stuff</span>
                <span>Stuff</span>
                <span>Stuff</span>
            </div>
        </div>
    </div>

    return (
        <div className={styles.project}>
            {swap ? projectCol : projectInfoCol}
            {swap ? projectInfoCol : projectCol}
        </div>
    )
}
