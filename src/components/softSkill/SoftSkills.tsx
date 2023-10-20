'use client'
import React from 'react'
import styles from './soft.module.css'
import { useState, useLayoutEffect } from 'react';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { AiOutlineMore } from 'react-icons/ai';
import { useAppContext } from '@/utils/context';
import { BiChevronsDown } from 'react-icons/bi';

export default function SoftSkills() {
    const { state: { skills } } = useAppContext();


    const [width, setWidth] = useState(0);
    const color = '#64CCC5';
    useLayoutEffect(() => {

        function updateWidth() {
            setWidth(window.innerWidth);
        }

        updateWidth();

        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);
    const [expanded, setExpanded] = useState(false);

    function handleExpand() {
        setExpanded(!expanded);
    }


    const Card = ({ skill }: any) => (
        <div className={styles.card}>
            <div className={styles.card_container}>
                <div className={styles.soft_Item}>
                    {skill.icon}
                    <h3>{skill.name}</h3>
                </div>
                <div className={styles.corner}>
                    <div className="go-arrow">
                        <AiOutlineMore size={23}/>
                    </div>
                    <p>{skill.content}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={styles.container}>
            <span className={styles.title} >soft skills</span>
            <div className={styles.softContainer}>
                {
                    skills.slice(0, 2).map((skill, index) => (
                        <Card skill={skill} key={index} />
                    ))
                }
                {
                    expanded && skills.slice(2).map((skill, index) => (
                        <Card skill={skill} key={index} />
                    ))
                }
            </div>
            {
                expanded
                    ? (<span className={styles.btnSkill} onClick={handleExpand}><RiArrowUpDoubleLine size={43} color={color} /></span>)
                    : (<span className={styles.btnSkillOpen} onClick={handleExpand}><BiChevronsDown size={43} color={color} /></span>)
            }
        </div>
    )
}
