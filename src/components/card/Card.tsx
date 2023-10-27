'use client'
import React from 'react';
import { Project } from '@/utils/interfaces';
import Image from 'next/image';
import styles from './card.module.css'
import Link from 'next/link';


const Card = ({ image, summary, name, deploy, tech, code, category }: Project) => {

    return (
        <React.Fragment>
            <div className={styles.imageContainer}>
                {/* {

                    category === 'ui' ?
                        (
                            <div className="video">
                                <VideoPlayer src={image} />
                            </div>
                        ) : (
                            <figure>
                                <Image src={image}
                                    layout="responsive"
                                    width={600}
                                    height={400}

                                    alt={name}
                                />
                            </figure>

                        )
                } */}
                <figure >
                    <Image src={image}
                        layout="responsive"
                        width={100}
                        height={100}
                        className={styles.image}
                        alt={name}
                    />
                </figure>
            </div>

            <div className={styles.cardInfo}>
                <span className={styles.title}>{name}</span>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.cardTech}
                    style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}
                >
                    {
                        tech.map((techItem, index) => (
                            <span className={styles.techItems} key={index}>{techItem}</span>
                        ))
                    }
                </div>
                <div className={styles.cardLinks}>
                    <Link href={code} className={`${styles.link_container}`}>
                        <div className={`${styles.link_content}`}>
                            <span>code</span>
                        </div>
                    </Link>

                    {
                        deploy && (
                            <Link href={deploy} className={`${styles.link_container} ${styles.demo}`} >
                                <div className={`${styles.link_content}`}>
                                    <span>deploy</span>
                                </div>
                            </Link>
                        )
                    }

                </div>
            </div>

        </React.Fragment>
    )
}
export default Card;


