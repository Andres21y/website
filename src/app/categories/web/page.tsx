'use client'
import { Card } from '@/components';
import { useAppContext } from '@/utils/context';
import React from 'react'
import styles from '../category.module.css'

const Web = () => {

  const { state: { projects } } = useAppContext();

  const weElements = projects.filter(e => e.category === 'web')

  return (

      <div className={styles.container}>

        <span>WEB APLICATION</span>

        <div className={styles.category_content}>
          {
            weElements.map(e => (
              <div className={styles.card_content} key={e.id}>
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

export default Web
