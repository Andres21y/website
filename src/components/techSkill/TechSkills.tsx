'use client'
import React from 'react'
import styles from './tech.module.css'
import { useAppContext } from '@/utils/context';

export default function TechSkills() {

    const { state: { tech } } = useAppContext();

    return (
        <div className={styles.container}>

            <span className='sub_title'>technological skills </span>

            <div className={styles.content}>
                {
                    tech.map((tech, index) => (
                        <div className={styles.tech} key={index}>

                            <div className={styles.tech_content_item}>
                                {tech.logo}
                                <span className={styles.name}>
                                    {tech.name}
                                </span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div >
    )
}
