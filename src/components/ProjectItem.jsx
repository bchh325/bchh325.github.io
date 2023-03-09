import React, { useState } from 'react'
import styles from './ProjectItem.module.css'

export default function ProjectItem({ swap }) {
    const projectCol = <div className={styles.left}>
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

    const projectInfoCol = <div>Second</div>

    return (
        <div className={styles.project}>
            {swap ? projectCol : projectInfoCol}
            {swap ? projectInfoCol : projectCol}
        </div>
    )
}
