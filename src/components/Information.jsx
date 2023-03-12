import React, { useEffect, useState } from 'react'
import { FaCoffee, FaUserLock } from 'react-icons/fa'
import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { useInView } from 'react-intersection-observer';

import styles from './Information.module.css'
import Skills from './InformationSections/Skills';
import About from './InformationSections/About';

export default function Information() {
  return (
    <div className={styles.container}>
      <div className={styles.myInfo}>
        <span>Bryan Chhorb</span>
        <span>Full Stack Developer</span>
      </div>
      <div className={styles.additionalInfo}>
        <Skills />
        <About />
        <div>Info</div>
      </div>
    </div>
  )
}
