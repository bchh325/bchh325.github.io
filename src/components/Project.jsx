import React from 'react'
import styles from './Project.module.css'

export default function Project() {
  return (
    <div className={styles.container}>
      <span>Project Name</span>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={`${styles.arrow} ${styles.right}`}>Right Arrow</div>
          <div className={`${styles.arrow} ${styles.left}`}>Left Arrow</div>
        </div>
        <div className={styles.techContainer}>
          <div className={styles.icon}>
            <span>Icon</span>
            <span>JavaScript</span>
          </div>
          <div>
            <span className={styles.icon}>Icon</span>
            <span>DynamoDB</span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          info
        </div>
      </div>
    </div>
  )
}
