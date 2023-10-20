'use client'
import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import styles from "./nav.module.css"; // Asegúrate de que la ruta a tus estilos sea correcta.
import { useAppContext } from "@/utils/context";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const { state } = useAppContext();
    const { links } = state;

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle(styles.responsive_nav);
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        className={styles.logoImg}
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                </div>
                <nav ref={navRef} className={styles.nav}> {/* Asigna la clase CSS para el estilo del nav */}
                    {
                        links.map((e) => (
                            <Link key={e.id} href={e.path} onClick={showNavbar} >
                                <span className={styles.link}> {e.title} </span>
                            </Link>
                        ))
                    }
                    <span
                        className={`${styles.nav_btn} ${styles.nav_close_btn}`} // Asigna las clases CSS para los botones
                        onClick={showNavbar}
                    >
                        <FaTimes size={27} />
                    </span>
                </nav>
                <span className={styles.nav_btn} onClick={showNavbar}>
                    <BiMenu size={27} />
                </span>
            </div>
        </div>
    );
}

export default Navbar;