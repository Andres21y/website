import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <section>
            <div className={styles.footer}>
                <div className={styles.footerbody}>
                    <div className={styles.linksections}>
                        <h5>sections</h5>
                        <Link href="/about" >About</Link>
                        <Link href="/portfolio" className='navLink'>Projects</Link>
                        <Link href="/skills" className='navLink'>Skills</Link>
                        <Link href="/experience" className='navLink'>Experience</Link>
                        <Link href="/contact" className='navLink'>Contact</Link>

                    </div >
                    <div className={styles.linksections}>
                        <h5> networks</h5>
                        <ul>
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                        </ul>

                    </div>
                   
                </div >
                <span>Design and built by Andres Cordoba</span>
            </div >
        </section>
    )
}

export default Footer
