import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Media } from '@/components'

function Contact() {
  const emailAddress = 'andres17vh@gmail.com'
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.container}>

        <Header name={"Let\'s connect!"} />
        <div className={styles.content}>

          <Image
            src={"/svg/contact.svg"}
            width={100}
            height={100}
            alt="anima"
            priority
            className={styles.image}
          />

          <div className={styles.info}>
            <p>
              I&#39;m currently open to a job, if you want to contact me,
              you can do import PropTypes from &#39;prop&#45;types&#39;
              through my networks or send a E&#45;mail
            </p>
            <span>let&#39;s talk</span>
            <div className={styles.btn}>
              <span className={styles.btn_content}>
                <Link href={`mailto:${emailAddress}`} className={styles.btn_buttom}>
                  connect
                </Link>
              </span>
            </div>

          </div>
        </div>

        <Media /> 
        <p style={{ padding: '0 1rem', lineHeight: '2rem' }}>
          Thank you for visiting my programming website. Should you require my services or wish to discuss a project, feel free to get in touch with me.
        </p>

      </div>
    </section >
  )
}

export default Contact
