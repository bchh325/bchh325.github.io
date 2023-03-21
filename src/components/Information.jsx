import React, { useEffect, useState } from 'react'

import styles from './Information.module.css'
import Skills from './InformationSections/Skills';
import About from './InformationSections/About';

export default function Information() {
  const [numItems, setNumItems] = useState(0)
  const [active, setActive] = useState(false)

  const delay = 50

  return (
    <div className={styles.container}>
      <div className={styles.additionalInfo}>
        <Skills delay={delay} setActive={setActive} setNumItems={setNumItems}/>
        <About delay={delay} active={active} numItems={numItems}/>
        <div>Info</div>
      </div>
    </div>
  )
}
