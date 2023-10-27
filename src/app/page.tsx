'use client'
import React from 'react';
import { useAppContext } from '@/utils/context';
import { experience, links, projects, sofSkill, tecnologies } from '@/utils/data';


import { About, Contact, Hero, Portfolio } from '@/views';
import { Navbar } from '@/components';


export default function Home() {

  const { state, setState } = useAppContext();

  React.useEffect(() => {
    async function charge() {
      await setState({
        ...state,
        tech: tecnologies,
        skills: sofSkill,
        projects: projects,
        links: links,
        experience: experience
      })
    }
    
    charge()

  }, [])

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />

    </div>
  )
}
