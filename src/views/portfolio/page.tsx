"use client";
import { Card, Header } from '@/components';
import React from 'react'
import styles from './portfolio.module.css'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import { MdArrowRightAlt, MdOpenInNew, MdOutlineWeb } from 'react-icons/md';
import Image from 'next/image';
import { BsPhone, BsRocketTakeoff } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';

type Card = {
  title: string,
  summary: string,
  category: string,
  icon: any,
}

const ProjectCard = ({ title, summary, category, icon }: Card) => {

  return (
    <div className={`${styles.card} ${styles[category]}`}>
      <div className={styles.card_content}>

        <span className={styles.icon}>{icon}</span>

        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>

        <div className={styles.btn_more}>
          <Link
            href={`/categories/${category}`}
          >
            <span>enter</span>
          </Link>

          <MdArrowRightAlt />
        </div>

      </div>

    </div>
  )
}

export default function Portfolio() {
  const { state: { projects } } = useAppContext();
  const notable = projects.slice(0, 2);
  return (

    <section id="portfolio" className={styles.gallery} >
      <div className={styles.container}>

        <Header name={"gallery"} />

        <span className='sub_title'>
          Categories
        </span>

        <div className={styles.projects_container}>

          <ProjectCard
            title="Web"
            summary="Let's look at projects built with cutting-edge web technologies like React.js, Next.js, TypeScript, Node.js, Express, PostgreSQL, and more. Witness the power of innovation."
            category="web"
            icon={<MdOutlineWeb />}
          />

          <ProjectCard
            title="Mobile"
            summary=" React Native Fundamentals
            - Building Cross-Platform Apps
            - UI/UX Design for Mobile
            - Integrating APIs and Services
            - App Deployment and Distribution"
            category="mobile"
            icon={<BsPhone />}
          />

          <ProjectCard
            title="UI"
            summary="Explore web development projects created with HTML, CSS, and JavaScript. Work&#35; showcases the art and science of the web."
            category="ui"
            icon={<MdOutlineWeb />}
          />

        </div>

        <div className={styles.notables}>

          <span className='sub_title'> Notable projects </span>

          <div className={styles.notable_projects}>
            {
              projects.length && notable.map(e => (
                <div className={styles.card_notable} key={e.id}>
                  <figure>
                    <Image
                      layout="responsive"
                      src={e.image}
                      height={100}
                      width={100}
                      alt={e.name}
                      className={styles.image}
                    ></Image>
                    <figcaption>

                      <span className={styles.title}>{e.name}</span>
                    </figcaption>
                  </figure>


                  <div className={styles.btn_container}>
                
                      <Link href={e.code}>
                        <div className={`${styles.links} ${styles.web}`} title='code'>
                          <BiCodeAlt size={25} />
                        </div>
                      </Link>

                      <Link href={e.deploy}>
                        <div className={`${styles.links} ${styles.mobile}`} title='deploy'>
                          <BsRocketTakeoff size={25} />
                        </div>
                      </Link>

                      <Link href={`/categories/web`}>
                        <div className={`${styles.links} ${styles.ui}`} title='detail'>
                          <MdOpenInNew size={25} />
                        </div>
                      </Link>


                    </div>
               

                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}
