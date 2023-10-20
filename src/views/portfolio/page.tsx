"use client";
import { Card, Header } from '@/components';
import React from 'react'
import styles from './portfolio.module.css'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import { BiSolidDevices, BiSolidRightArrowAlt } from 'react-icons/bi';
import { MdArrowRightAlt, MdOutlineWeb } from 'react-icons/md';
import { BsIntersect } from 'react-icons/bs';
import Image from 'next/image';
import { AiOutlineCaretRight } from 'react-icons/ai';

type Props = {
  svg: any,
  title: string,
  summ: string,
  categorie: string
}

export default function Portfolio() {
  const { state: { projects } } = useAppContext();
  const latest = projects.slice(0, 2);
  return (
    <section id="projects" className={styles.gallery} >
      <div className={styles.container}>

        <Header name={"gallery"} />

        <div className={styles.projects_container}>

          <div className={`${styles.card} ${styles.card_web}`}>
            <div className={styles.card_content}>
              <div className={styles.info}>
                <MdOutlineWeb />

                <span>Web</span>
                <span>multi&#45;divice</span>
              </div>
              <Link href={"#"} className={styles.btn_more}>
              <span>Let&#39;s go</span>
                <MdArrowRightAlt />
              </Link>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card_mobile}`}>
            <div className={styles.card_content}>
              <div className={styles.info}>
                <MdOutlineWeb />

                <span>Web</span>
                <span>multi&#45;divice</span>
              </div>
              <Link href={"#"} className={styles.btn_more}>
              <span>Let&#39;s go</span>
                <MdArrowRightAlt />
              </Link>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card_other}`}>
            <div className={styles.card_content}>
              <div className={styles.info}>
                <MdOutlineWeb />

                <span>Web</span>
                <span>multi&#45;divice</span>
              </div>
              <Link href={"#"} className={styles.btn_more}>
                <span>Let&#39;s go</span>
                <MdArrowRightAlt />
              </Link>
            </div>
          </div>

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

                  <Link href={"#"} className={styles.btn_detail}>
                    <span>Click me</span>
                    <AiOutlineCaretRight />
                  </Link>
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