import React, { useState } from 'react'
import styles from './ProjectItem.module.css'
import { Parallax } from 'react-scroll-parallax';


export default function ProjectItem({ swap }) {

    const leftStyle = {
        "border-radius": "0px 150px 150px 0px"
    }

    const rightStyle = {
        "border-radius": "150px 0px 0px 150px"
    }

    const projectCol = <div style={swap ? leftStyle : rightStyle} className={styles.left}>
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
        <Parallax speed={0} translateX={[swap ? 100 : -100, swap ? -100 : 100]} easing={'easeInOut'} className={styles.right}>
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
        </Parallax>
    </div>

    return (
        <div className={styles.project}>
            {swap ? projectCol : projectInfoCol}
            {swap ? projectInfoCol : projectCol}
        </div>
    )
}
