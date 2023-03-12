import React, { useEffect, useState } from 'react'
import { FaUserLock } from 'react-icons/fa'
import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css'

export default function Skills() {
    const [active, setActive] = useState(false)
    const [ref, inView, entry] = useInView()

    const [frontEnd, setFrontEnd] = useState([
        {
            iconName: DiReact,
            text: "React.js"
        },
        {
            iconName: DiJavascript,
            text: "JavaScript"
        },
        {
            iconName: DiHtml5,
            text: "HTML5"
        },
        {
            iconName: DiCss3,
            text: "CSS"
        }
    ])

    const [backEnd, setBackEnd] = useState([
        {
            iconName: DiNodejsSmall,
            text: "Node.js"
        },
        {
            iconName: SiExpress,
            text: "Express.js"
        },
        // {
        //     iconName: SiMongodb,
        //     text: "MongoDB"
        // },
        {
            iconName: FaUserLock,
            text: "OAuth (PKCE)"
        },
        {
            iconName: SiAmazondynamodb,
            text: "DynamoDB"
        },
        {
            iconName: SiAwslambda,
            text: "Lambda"
        },
        {
            iconName: SiAmazonapigateway,
            text: "API Gateway"
        }
    ])

    useEffect(() => {
        if (inView) {
            setActive(true)
        }
    }, [inView])

    return (
        <div className={styles.skills}>
            <div>
                <div className={`${styles.columnHeader} ${active ? styles.display : ""}`}>
                    <span>Front-End</span>
                </div>
                <div className={styles.skillsIconsContainer}>
                    {frontEnd.map((skill, index) => {
                        const IconType = skill.iconName
                        return (
                            <div style={{ transitionDelay: `${index * 75}ms` }} className={`${styles.icon} ${active ? styles.display : ""}`}>
                                <IconType size={40} />
                                <span>{skill.text}</span>
                            </div>)
                    })}
                </div>
            </div>
            <div>
                <div ref={ref} className={`${styles.columnHeader} ${active ? styles.display : ""}`}>
                    <span>Back-End</span>
                </div>
                <div className={styles.skillsIconsContainer}>
                    {backEnd.map((skill, index) => {
                        const IconType = skill.iconName
                        return (
                            <div style={{ transitionDelay: `${((frontEnd.length) * 75) + index * 75}ms` }} className={`${styles.icon} ${active ? styles.display : ""}`}>
                                <IconType size={40} />
                                <span>{skill.text}</span>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
