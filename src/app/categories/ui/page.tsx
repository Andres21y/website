'use client'
import { Card } from '@/components';
import { useAppContext } from '@/utils/context';
import React from 'react'
import styles from '../category.module.css'

const Ui = () => {

  const { state: { projects } } = useAppContext();

  const uiElements = projects.filter(e => e.category === 'ui')

  return (
    <div className={styles.container}>

      <span>UI  APLICATION</span>

      <div className="category_content">
        {
          uiElements.map(e => (
            <div className={styles.card_content} key={e.id}>
              <Card
                id={e.id}
                name={e.name}
                code={e.code} key={e.id}
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

export default Ui
