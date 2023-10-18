'use client'
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerbody}>
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Navigation</span>
                    </div>
                    <div className={styles.contents}>
                        <Link href="about" >About</Link>
                        <Link href="portfolio" className='navLink'>Projects</Link>
                        <Link href="experience" className='navLink'>Experience</Link>
                        <Link href="contact" className='navLink'>Contact</Link>
                    </div>

                </div >
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Networks</span>
                    </div>
                    <div className={styles.contents}>
                        <Link href="https://www.linkedin.com/in/andres-cordoba-8714b5238/">Linkedin</Link>
                        <Link href="mailto:andres17vh@gmail.com" target="_blank">Mail</Link>
                        <Link href="https://github.com/Andres21y">github</Link>
                    </div>
                </div>
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Grettings</span>
                    </div>
                    <a href="https://storyset.com/people" target='_blank'>People illustrations by Storyset</a>
                </div>

            </div >
            <span className={styles.copyright} >Design and built by Andres Cordoba</span>
        </div>
    )
}

export default Footer
