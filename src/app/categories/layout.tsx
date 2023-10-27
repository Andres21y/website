import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './category.module.css'
import { IoMdReturnLeft } from 'react-icons/io';
const Navbar = () => (
    <div className={styles.nav_bar}>
        <div className={styles.nav_container}>
            <Link href={"/"}>
                <div className={'styles.logo'}>
                    <Image
                        src="/images/logo.png"
                        className={'styles.logoImg'}
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                </div>
            </Link>
            <Link href={"/"}>
                <span className={styles.back}><IoMdReturnLeft size={30} /> Home</span>
            </Link>
        </div>
    </div>
);

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className={styles.categories}>
                {children}
            </div>
        </>
    )
}

export default layout
