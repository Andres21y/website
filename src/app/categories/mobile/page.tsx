'use client'
import { Card } from '@/components';
import { useAppContext } from '@/utils/context';
import React from 'react'
import styles from '../category.module.css'

const Mobile = () => {

  const { state: { projects } } = useAppContext();
 
   const mobElements = projects.filter(e => e.category === 'mobile')

  return (
    <div className={styles.container}>

      <span>MOMBILES APLICATIONS</span>

      <div className={styles.category_content}>
        {
          mobElements.map(e => (
            <div className={styles.card_content}>
              <Card
                id={e.id}
                name={e.name}
                code={e.code}
                tech={e.tech}
                image={e.image}
                deploy={e.deploy}
                linkedin={e.linkedin}
                category={e.category}
                summary={e.summary}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Mobile
