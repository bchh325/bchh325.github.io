import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import styles from './Skills.module.css'

export default function Skills({ hoverBg, setHover, setHoverImage }) {
    const [highlight, setHighlight] = useState(null)

    const handleHover = (id) => {
        setHighlight(id)
        hoverBg(id)
    }

    const resetHover = () => {
        setHighlight(null)
    }

    const containerEnter = () => {
        setHover("hover-bg")
        setHoverImage("hover-imgbg")
    }

    const containerLeave = () => {
        setHover("")
        setHoverImage("")
    }

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.itemsContainer}>
                <div className={styles.titles} onMouseLeave={containerLeave} onMouseEnter={containerEnter}>
                    <span onMouseLeave={resetHover} onMouseEnter={() => handleHover(1)}>Title</span>
                    <span onMouseLeave={resetHover} onMouseEnter={() => handleHover(2)}>Title</span>
                    <span onMouseLeave={resetHover} onMouseEnter={() => handleHover(3)}>Title</span>
                </div>
            </div>
            <div className={styles.iconsContainer}>
                <div>
                    <div className={`${styles.firstRow} ${styles.rows} ${highlight === 1 ? `${styles.highlight}` : ""}`}>
                        <span>Icon</span>
                        <span>Icon</span>
                        <span>Icon</span>
                    </div>
                    <div className={`${styles.secondRow} ${styles.rows} ${highlight === 2 ? `${styles.highlight}` : ""}`}>
                        <span>Icon</span>
                        <span>Icon</span>
                        <span>Icon</span>
                    </div>
                    <div className={`${styles.thirdRow} ${styles.rows} ${highlight === 3 ? `${styles.highlight}` : ""}`}>
                        <span>Icon</span>
                        <span>Icon</span>
                        <span>Icon</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
