import Link from 'next/link'
import React from 'react'
import styles from './hire.module.css'
import { LuDownloadCloud } from 'react-icons/lu'

export default function HireMe() {
    return (
        <div className={styles.container}>
            <Link href={'#contact'}>
                <span className={styles.button1}>
                    Hire Me
                </span>
            </Link>
            <div className={styles.button}>
                <span className={styles.button__text}>
                    download cv
                </span>

                <Link href={'#contact'} className={styles.button__icon} >
                    <span >
                        <LuDownloadCloud size={23} />
                    </span>
                </Link>
            </div>

        </div >

    )
}
