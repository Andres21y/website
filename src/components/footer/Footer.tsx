'use client'
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { urlPath } from '@/utils/data'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerbody}>
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Navigation</span>
                    </div>
                    <div className={styles.contents}>
                        <Link href="/#about" >About</Link>
                        <Link href="/#portfolio" className='navLink'>Projects</Link>
                        {/* <Link href="/#experience" className='navLink'>Experience</Link> */}
                        <Link href="/#contact" className='navLink'>Contact</Link>
                    </div>

                </div >
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Networks</span>
                    </div>
                    <div className={styles.contents}>
                        <Link href={urlPath.linkedin}>Linkedin</Link>
                        <Link href={urlPath.mail} target="_blank">Mail</Link>
                        <Link href={urlPath.github}>github</Link>
                    </div>
                </div>
                <div className={styles.linksections}>
                    <div className={styles.title}>
                        <span>Grettings</span>
                    </div>
                    <a href="https://storyset.com/people" target='_blank'>People illustrations by Storyset</a>
                </div>

            </div >
            <span className={styles.copyright} >All rights reserved. Designed and developed by Andres Cordoba</span>
        </div>
    )
}

export default Footer
