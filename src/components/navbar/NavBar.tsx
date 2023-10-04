'use client'
import { useAppContext } from '@/utils/context';
import Link from 'next/link';
import React from 'react'

const NavBar = () => {
    const { state, setState } = useAppContext();
    const { links } = state;

    return (
        <div>
            <div>
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
