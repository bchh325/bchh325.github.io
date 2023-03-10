import React from 'react'
import ProjectItem from './ProjectItem'
import styles from './Project.module.css'

export default function Project({ swap }) {

    return (
        <div className={styles.container}>
            <ProjectItem swap={swap}/>
        </div>
    )
}
