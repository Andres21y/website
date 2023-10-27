import Image from 'next/image'
import React from 'react'
import styles from './hero.module.css'
import { Hire } from '@/components'
import { PiDotsThreeThin } from 'react-icons/pi'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container}`}>

        <div className={styles.content}>
          <div className={styles.content__main}>
            <div className={styles.container__name} >
              <span className={styles.name} >Andres Cordoba</span>
              <span className={styles.carrer}>Full-Stack Developer</span>
            </div>
            <p className={styles.summary}> I love the opportunity to innovate and create something unique that has a positive impact on people&#39;s lives.</p>
            <span style={{display:'flex', alignItems:'center'}}><PiDotsThreeThin  size={47} />It is not just a job, it is a passion. <PiDotsThreeThin size={47}/> </span>
          </div>

          <div><Hire /></div>
        </div>

        <div className={styles.img}>
          <Image
            src="/svg/main.svg"
            className={styles.image}
            width={100}
            height={100}
            alt="animation"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero
