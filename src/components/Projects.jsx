import React from 'react'
import ProjectItem from './ProjectItem'
import styles from './Projects.module.css'

export default function Projects() {

    return (
        <div className={styles.container}>
            <ProjectItem swap={true}/>
            <ProjectItem />
            <ProjectItem swap={true}/>
            <ProjectItem />
        </div>
    )
}
