'use client'
import React from 'react'
import styles from './tech.module.css'
import { useAppContext } from '@/utils/context';

export default function TechSkills() {
    const { state } = useAppContext();
    const { tech } = state;
    return (
        <div className={styles.container}>
            <span className={styles.title}>technical skills</span>
            <div className={styles.content}>
                {
                    tech.map((tech, index) => (
                        <div className={styles.tech} key={index}>
                            <div className={styles.techLogo}>
                                {tech.logo}
                            </div>
                            <div className={styles.techName}>
                                {tech.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
