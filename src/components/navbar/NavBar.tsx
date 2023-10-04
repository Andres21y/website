'use client'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import React from 'react'
import { TbMenuDeep } from 'react-icons/tb';
import nav from './nav.module.css'
const NavBar = () => {
    const { state, setState } = useAppContext();
    const { links } = state;
    const [showNav, setShowNav] = React.useState(false);

    const toggleNav = () => {
      setShowNav(!showNav);
    };
  
    return (
        <div style={{display:'flex'}}>
            <div className={nav.logo}>
                <img src="/logo.png" alt="Logo" />
                <span>Andres Cordoba</span>
            </div>
            <div className={nav.menuIcon} onClick={toggleNav}>
                <TbMenuDeep />
            </div>
            <div className={`${nav.menu} ${showNav ? nav.show : ''}`}>
                {
                    links.map((e) => (
                        <Link key={e.id} href={e.path}>
                            <span> {e.title} </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar
