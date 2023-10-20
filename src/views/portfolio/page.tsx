"use client";
import { Card, Header } from '@/components';
import React from 'react'
import styles from './portfolio.module.css'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import { MdArrowRightAlt, MdOutlineWeb } from 'react-icons/md';
import Image from 'next/image';
import { BsPhone } from 'react-icons/bs';

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

        {icon}
        <div className={styles.info}>
          <span>{title}</span>
          <span>{summary}</span>
        </div>

        <Link href="#">
          <div className={styles.btn_more}>
            <span>enter</span>
            <MdArrowRightAlt />
          </div>
        </Link>

      </div>
    </div>
  )
}

export default function Portfolio() {
  const { state: { projects } } = useAppContext();
  const latest = projects.slice(0, 2);


  return (
    <section id="projects" className={styles.gallery} >
      <div className={styles.container}>

        <Header name={"gallery"} />

        <span className={styles.title_projects}>
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
            category="others"
            icon={<MdOutlineWeb />}
          />

        </div>
        <div className={styles.notables}>
          <span className={styles.title_projects}>
            Notable projects
          </span>
          <div className={styles.notable_projects}>
            {
              projects.length && latest.map(e => (
                <div className={styles.card_notable} key={e.id}>
                  <Image
                    layout="responsive"
                    src={e.image}
                    height={100}
                    width={100}
                    alt={e.name}
                    className={styles.image}
                  ></Image>


                  <div className={styles.btn_container}>

                    <div className={styles.links}>
                      <Link href={e.code}>
                        <span>code</span>
                      </Link>
                    </div>

                    <div className={styles.links}>
                      <Link href={e.deploy}>
                        <span>deploy</span>
                      </Link>
                    </div>

                    <Link href={`/categories/${e.id}`}>
                      <div className={styles.links}>
                        <span>detail</span>
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
/**
 * 
 *  {
            projects.length && projects.map(e => (
              <div className={styles.card} key={e.id}>

                <Card
                  id={e.id}
                  name={e.name}
                  code={e.code}
                  summary={e.summary}
                  image={e.image}
                  deploy={e.deploy}
                  tech={e.tech}
                  linkedin={e.linkedin}
                  category={e.category}

                />
              </div>
            ))
          }
 */