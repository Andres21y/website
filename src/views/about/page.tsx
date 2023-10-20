import { Header, Media, Soft, Tech } from '@/components'
import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import personal from '../../../public/images/admin.jpg'
import HireMe from '@/components/hireMe/HireMe'
function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>

        <Header name={'about'} />
        <div className={styles.main}>
          <div className={styles.imgContainer}>
            <figure>
              <Image src={personal}
                layout="responsive"
                width={600}
                height={400}
                alt="xx" />
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
              Soy un apasionado Full Stack Developer con un enfoque destacado
              en el lado del cliente. Mi viaje en el mundo de la programación
              comenzó como una búsqueda de la creatividad a través de la
              tecnología. Con habilidades sólidas en HTML, CSS y JavaScript,
              me especializo en la creación de experiencias de usuario
              excepcionales y altamente interactivas.
            </p>
            <p>
              Mi enfoque se centra en
              traducir las ideas y necesidades del cliente en soluciones
              digitales elegantes y funcionales. Con un ojo para el diseño y
              un compromiso inquebrantable con la optimización del rendimiento,
              mi objetivo es proporcionar a los usuarios finales experiencias
              web fluidas y memorables.
            </p>
            <HireMe />
          </div>
        </div>

        <Tech />
        <Soft />

      </div>
    </section>
  )
}

export default About

