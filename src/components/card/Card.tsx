'use client'
import React from 'react';
import { Project } from '@/utils/interfaces';
import Image from 'next/image';
import styles from '../styles/card.module.css'
import { BsRocketTakeoff } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';

const Card = ({ image, summary, name, deploy, tech, code }: Project) => {

    return (
        <React.Fragment>
            <Image src={image}
                height={100}
                width={100}
                className={styles.img}
                alt={name}
            />

            <div className={styles.cardInfo}>
                <span className={styles.title}>{name}</span>
                <p className={styles.summ}>{summary}</p>
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
                            <a href={deploy}>
                                <BsRocketTakeoff size='21px' color='yellow' />
                                <span>lunch</span>
                            </a>
                        )
                    }

                </div>
            </div>

        </React.Fragment>
    )
}
export default Card;


