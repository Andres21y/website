import { Header, Media, Soft, Tech } from '@/components'
import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import personal from '../../../public/images/club.jpg'
import HireMe from '@/components/hireMe/HireMe'

function About() {

  return (
    <section className={styles.about} id='about'>
      <div className={styles.container}>

        <Header name={'about'} />
        <div className={styles.main}>
          <div className={styles.imgContainer}>
            <figure>
              <Image src={personal}
                layout="responsive"
                width={600}
                height={400}
                alt="moi" />
              <figcaption className={styles.figure}>
                <span className={styles.name}>Andres Cordoba</span>
                <br />
                <span>web developer</span>
              </figcaption>
            </figure>

            <Media />

          </div>


          <div className={styles.infoContainer}>
            <p>
              I am a zealous Full Stack Developer with a prominent focus on the client side. My journey into the realm of programming commenced as a pursuit of creativity through technology. Endowed with formidable skills in HTML, CSS, and JavaScript, I specialize in fashioning exceptional and highly interactive user experiences.
            </p>
            <p>
              My emphasis revolves around the translation of client ideas and requirements into elegant and functional digital solutions. With a discerning eye for design and an unwavering commitment to performance optimization, my aim is to provide end-users with seamless and unforgettable web experiences.
            </p>
            <HireMe />
          </div>
        </div>

        <Tech />
        {/* <Soft /> */}

      </div>
    </section>
  )
}

export default About

