'use client'
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { useAppContext } from '@/utils/context';
import { links, projects, sofSkill, tecnologies } from '@/utils/data';


export default function Home() {
  const { state, setState } = useAppContext();
  React.useEffect(() => {
    setState({
      ...state,
      tech: tecnologies,
      skills: sofSkill,
      projects: projects,
      links: links
    })
  }, [])

  return (
    <main className={styles.main} >
      <span>home</span>
    </main>
  )
}
