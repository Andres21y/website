import Link from 'next/link'
import React from 'react'
import styles from './hire.module.css'
import { FaCloudDownloadAlt } from 'react-icons/fa'

export default function HireMe() {
    return (
        <div className={styles.container}>
            <Link href={'#contact'}>
                <span className={styles.button}>
                    Hire Me
                </span>
            </Link>

            <Link href={'#contact'}>
                <span className={styles.buttonOff}>
                    {<FaCloudDownloadAlt size={21} />}
                    download cv
                </span>
            </Link>

        </div>

    )
}
