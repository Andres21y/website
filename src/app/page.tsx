'use client'
import React from 'react';
import { useAppContext } from '@/utils/context';
import { experience, links, projects, sofSkill, tecnologies } from '@/utils/data';


import { About, Contact, Hero, Portfolio } from '@/views';


export default function Home() {

  const { state, setState } = useAppContext();

  React.useEffect(() => {
    setState({
      ...state,
      tech: tecnologies,
      skills: sofSkill,
      projects: projects,
      links: links,
      experience: experience
    })
  }, [state, setState])

  return (
    <div className="main">

      <Hero />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />

    </div>
  )
}
