import React from 'react'
import styles from './media.module.css'
import Link from 'next/link'
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { urlPath } from '@/utils/data';

const Social = () => {
    return (
        <div className={styles.container}>
            <Link href={urlPath.mail} target="_blank" className={`${styles.icon} ${styles.gmail}`}>
                <span><FiMail /></span>
            </Link>
            <Link href={urlPath.github} className={`${styles.icon} ${styles.github}`}>
                <span><FiGithub /></span>
            </Link>
            <Link href={urlPath.linkedin} className={`${styles.icon} ${styles.linkedin}`}>
                <span> <FaLinkedinIn /></span>
            </Link>
        </div>
    )
}

export default Social
