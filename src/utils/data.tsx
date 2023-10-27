import { SiTypescript, SiJavascript, SiPostgresql, SiRedux } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { FaNodeJs, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { FcConferenceCall, FcMindMap, FcOnlineSupport } from 'react-icons/fc';
import { FcEngineering, FcServices, FcWorkflow } from 'react-icons/fc';
import { SiVtex, SiTailwindcss } from 'react-icons/si';
import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
export const icon = React.createElement;
import { v4 as uuidv4 } from 'uuid';
import { BiLogoFirebase } from 'react-icons/bi';

const icons = {
    js: <SiJavascript size={37} color={'rgb(240, 219, 79)'} />,
    h5: <FaHtml5 size={37} color={'#f14a29'} />,
    react: <DiReact size={37} color={'#61dafb'} />,
    rNative: <DiReact size={27} color={'#61dafb'} />,
    ts: <SiTypescript size={37} color={'#3178c6'} />,
    nJs: <FaNodeJs size={37} color={'#5fa04e'} />,
    psql: <SiPostgresql size={37} color={'#2980b9'} />,
    sql: <TbSql size={37} color={'#0078d4'} />,
    vtex: <SiVtex size={37} color={'#e31c58'} />,
    redux: <SiRedux size={37} color={'#bf4080'} />,
    css: <FaCss3Alt size={37} color={'#2965f1'} />,
    sass: <FaSass size={37} color={'#f14a29'} />,
    tw: <SiTailwindcss size={37} color={'rgb(56, 189, 248)'} />,
    fbase: <BiLogoFirebase size={37} color={'rgb(240, 219, 79)'} />,
}

export const tecnologies = [
    {
        name: "JavaScript",
        logo: icons.js,
    },
    {
        name: "Html",
        logo: icons.h5,
    },
    {
        name: "React",
        logo: icons.react,
    },
    {
        name: "React Native",
        logo: icons.rNative,
    },
    {
        name: "Typescript",
        logo: icons.ts,
    },
    {
        name: "Node.js",
        logo: icons.nJs,
    },
    {
        name: "Postgres",
        logo: icons.psql,
    },
    {
        name: "SQL",
        logo: icons.sql,
    },
    {
        name: "Vtex",
        logo: icons.vtex,
    },
    {
        name: "Redux",
        logo: icons.redux,
    },
    {
        name: "Css",
        logo: icons.css,
    },
    {
        name: "Sass",
        logo: icons.sass,
    },
    {
        name: "Tailwind",
        logo: icons.tw,
    }
]

export const projects = [
    {
        category: 'web',
        id: uuidv4(),
        image: '/images/portfolio.png',
        name: "Latest Portfolio",
        summary: "Crafted and developed utilizing React and styled with SCSS, this digital work of art is a testament to my unwavering commitment to seamlessly blend creativity with technical prowess.",
        deploy: "https://portafolio-web-eta.vercel.app/",
        code: "https://github.com/Andres21y/portafolio_web",
        linkedin: "https://www.linkedin.com/posts/andres-cordoba-8714b5238_empleo-activity-7066434933103194112-CFcl?utm_source=share&utm_medium=member_desktop",
        tech: [
            icons.nJs,
            icons.react,
            icons.sass,
        ]
    },
    {
        category: 'web',
        id: uuidv4(),
        image: '/images/club.jpg',
        name: "Club Wolves - Voleyball",
        summary: "The ultimate application for volleyball enthusiasts and club members is here. Designed with fervor and utilizing cutting-edge technologies such as React, Redux, Firebase, and Node.js, this app offers players, coaches, and followers a more engaged and exhilarating club experience than ever before.",
        deploy: "https://finalproject-one.vercel.app/",
        code: "https://github.com/medinahj21/Final_Project/tree/dev",
        linkedin: "#",
        tech: [
            icons.js,
            icons.react,
            icons.redux,
            icons.nJs,
            icons.sql,
        ]
    },
    {
        category: 'web',
        id: uuidv4(),
        image: '/images/pokeApi.png',
        name: "Catch One",
        summary: "This is an exhilarating application designed for all Pokémon enthusiasts who yearn to explore the world of these adorable pocket monsters. Developed with cutting-edge technologies such as React for the user interface, Firebase for cloud-based data storage, and Node.js for the backend, this application immerses you in the vast collection of Pokémon in an intuitive and thrilling way.",
        deploy: "https://poke-api-chatch.vercel.app/",
        code: "https://github.com/Andres21y/Poke_api_chatch",
        linkedin: "#",
        tech: [
            icons.ts,
            icons.nJs,
            icons.react,
            icons.fbase,
            icons.css,
        ]
    },
    {
        category: 'ui',
        id: uuidv4(),
        image: '/images/whatsapp.jpg',
        name: "Botom Custom Whatsapp Vtex",
        summary: "An exhilarating WhatsApp Button component developed in TypeScript! This innovative feature is designed to take your online store's customer experience to the next level by seamlessly integrating the popular messaging platform, WhatsApp.",
        deploy: "",
        code: "https://github.com/Andres21y/vtex-whatsapp-button",
        linkedin: "#",
        tech: [
            icons.ts,
            icons.nJs
        ]
    },
    {
        category: 'ui',
        id: uuidv4(),
        image: '/images/clock.png',
        name: "Clock Analogo",
        summary: "This project entails an interactive analog clock meticulously crafted and developed employing standard web technologies such as HTML, CSS, and JavaScript. It epitomizes a manifestation of my prowess as a web developer and interface designer.",
        deploy: "https://andres21y.github.io/analog_clock/",
        code: "https://github.com/medinahj21/Final_Project/tree/dev",
        linkedin: "#",
        tech: [
            icons.js,
            icons.h5,
            icons.css,
        ]
    },
]


export const sofSkill = [
    {
        name: "Espíritu de servicio",
        content: "Me gusta ayudar, dar una mano desinteresada a cualquiera que lo necesite.",
        icon: <FcEngineering size={77} color={'red'} />
    }, {
        name: "Trabajo en equipo",
        content: "Mantener un ambiente sano, donde la empatía sea el motor; es mi propósito siempre.",
        icon: <FcConferenceCall size={77} />

    }, {
        name: "Responsabilidad",
        content: "Llegar antes de los horarios establecidos, cumplir con los tiempos y responsabilidades asignadas.",
        icon: <FcWorkflow size={77} />
    }, {
        name: "Adaptación al cambio",
        content: "Me gusta responder de la mejor manera a situaciones repentinas, incluso cuando se salen de mis planes.",
        icon: <FcServices size={77} />
    }, {
        name: "Proactividad",
        content: "Cuando sé que hay algo que hacer y dentro de mis posibilidades está la solución al problema en cuestión, me gusta hacerlo si no busco ayuda.😄",
        icon: <FcMindMap size={77} />
    }, {
        name: "Comunicación asertiva",
        content: "Me gusta tener la idea de promover un acto comunicativo óptimo.",
        icon: <FcOnlineSupport size={77} />
    }

]

export const links = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'About',
        path: '#about'
    },
    {
        id: 4,
        title: 'Portfolio',
        path: '#portfolio'
    },
    // {
    //     id: 5,
    //     title: 'Experience',
    //     path: '#experience'
    // },
    {
        id: 6,
        title: 'Contact',
        path: '#contact'
    },
]

export const experience = [{
    title: 'FULL STACK DEVELOPER',
    location: 'Argentina(remoto)',
    company: 'Henry',
    date: 'Mar/22 - Nov/23',
    icon: React.createElement(MdDeveloperMode),
    summary: ''
},
{
    title: 'DEVELOPER WEB TRAINEE',
    location: 'COLOMBIA',
    company: 'IT Globers',
    date: 'Nov/22 - Ene/23',
    icon: React.createElement(MdDeveloperMode),
    summary: ''
},
{
    title: 'DEVELOPER WEB TRAINEE',
    location: 'COLOMBIA',
    company: 'Vtex Tech Training Latam',
    date: 'Nov/22 - Ene/23',
    icon: React.createElement(MdDeveloperMode),
    summary: ''
},
{
    title: 'DEVELOPER WEB TRAINEE',
    location: 'COLOMBIA',
    company: 'Vtex Tech Training Latam',
    date: 'Nov/22 - Ene/23',
    icon: React.createElement(MdDeveloperMode),
    summary: ''
},
]

export const urlPath ={
        linkedin:"https://www.linkedin.com/in/andres-cordoba-8714b5238/",
        github:"https://github.com/Andres21y",
        mail:"mailto:andres17vh@gmail.com"
    }
