import React, { useEffect, useState } from 'react'
import { FaUserLock } from 'react-icons/fa'
import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css'

export default function Skills({ setNumItems, setActive, delay }) {
    const [ref, inView, entry] = useInView()
    const [tempActive, setTempActive] = useState(false)


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
            setTempActive(true)
        }
    }, [inView])

    useEffect(() => {
        setNumItems(backEnd.length + frontEnd.length)
    }, [])

    return (
        <div className={styles.skills}>
            <div>
                <div className={`${styles.columnHeader} ${tempActive ? styles.display : ""}`}>
                    <span>Front-End</span>
                </div>
                <div className={styles.skillsIconsContainer}>
                    {frontEnd.map((skill, index) => {
                        const IconType = skill.iconName
                        return (
                            <div style={{ transitionDelay: `${index * delay}ms` }} className={`${styles.icon} ${tempActive ? styles.display : ""}`}>
                                <IconType size={40} />
                                <span>{skill.text}</span>
                            </div>)
                    })}
                </div>
            </div>
            <div>
                <div ref={ref} className={`${styles.columnHeader} ${tempActive ? styles.display : ""}`}>
                    <span>Back-End</span>
                </div>
                <div className={styles.skillsIconsContainer}>
                    {backEnd.map((skill, index) => {
                        const IconType = skill.iconName
                        return (
                            <div style={{ transitionDelay: `${((frontEnd.length) * delay) + index * delay}ms` }} className={`${styles.icon} ${tempActive ? styles.display : ""}`}>
                                <IconType size={40} />
                                <span>{skill.text}</span>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
