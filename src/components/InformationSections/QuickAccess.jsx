import React from 'react'
import styles from './QuickAccess.module.css'

export default function QuickAccess() {
  return (
    <div className={styles.container}>
      <span>Header</span>
      <div className={styles.quickInfo}>
        <span>Email</span>
      </div>
    </div>
  )
}
