import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Media } from '@/components'

function Contact() {
  return (
    <section className={styles.contact} >
      <div className="container">

        <Header name={"Let's connect!"} />
        <div className={styles.content}>

          <Image
            src={'/svg/contact.svg'}
            width={100}
            height={100}
            alt='anima'
            priority
            className={styles.image}
          />

          <div className={styles.info}>
            <p>
              I'm currently open to a job, if you want to contact me,
              you can do import PropTypes from 'prop-types'
              through my networks or send a E-mail
            </p>
            <span>let's talk</span>
            <span className={styles.callTo}>
              <Link href={'#'}>
                call to action
              </Link>
            </span>

          </div>

        </div>

        <Media />

      </div>
    </section >
  )
}

export default Contact
