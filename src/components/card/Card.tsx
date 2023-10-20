'use client'
import React from 'react';
import { Project } from '@/utils/interfaces';
import Image from 'next/image';
import styles from './card.module.css'
import { BsRocketTakeoff } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import Link from 'next/link';
import { VideoPlayer } from '..';

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
                <figure>
                    <Image src={image}
                        // layout="responsive"
                        width={100}
                        height={100}
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
                    <a href={code}><BiCodeAlt size='21px' color='#ff0000' /><span>code</span></a>

                    {
                        deploy && (
                            <Link href={deploy} className={styles.demo}>
                                <Image
                                    src={'/svg/rocket.svg'}
                                    width={40}
                                    height={40}
                                    alt='anima'
                                    priority
                                    className={styles.demoImg}
                                />
                                <span>lunch</span>
                            </Link>
                        )
                    }

                </div>
            </div>

        </React.Fragment>
    )
}
export default Card;


