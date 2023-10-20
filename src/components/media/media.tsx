import React from 'react'
import styles from './media.module.css'
import Link from 'next/link'
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Social = () => {
    return (
        <div className={styles.container}>
            <Link href="#" className={`${styles.icon} ${styles.gmail}`}>
                <span className={styles.tooltip}>Gmail</span>
                <span><FiMail /></span>
            </Link>
            <Link href="#" className={`${styles.icon} ${styles.github}`}>
                <span className={styles.tooltip}>Github</span>
                <span><FiGithub /></span>
            </Link>
            <Link href="#" className={`${styles.icon} ${styles.linkedin}`}>
                <span className={styles.tooltip}>Linkedin</span>
                <span> <FaLinkedinIn /></span>
            </Link>
        </div>
    )
}

export default Social
