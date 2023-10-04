'use client'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import React from 'react'

const NavBar = () => {
    const { state, setState } = useAppContext();
    const { links } = state;

    return (
        <div>
            <span>navba</span>
            <div>
                {
                    links.map((e) => (
                        <Link key={e.id} href={e.path}>
                            {e.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar
