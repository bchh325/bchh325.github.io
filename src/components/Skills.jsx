import React, { useState } from 'react'
import styles from './Skills.module.css'

export default function Skills() {
    const [highlight, setHighlight] = useState(null)

    const handleHover = (id) => {
        setHighlight(id)
    }

    const resetHover = () => {
        setHighlight(null)
    }

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.itemsContainer}>
                <div>
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
