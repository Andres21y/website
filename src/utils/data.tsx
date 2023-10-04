import { SiTypescript, SiJavascript, SiPostgresql, SiRedux } from 'react-icons/si';
import { DiReact, DiScrum } from 'react-icons/di';
import { FaNodeJs, FaSass, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { FcConferenceCall, FcMindMap, FcOnlineSupport } from 'react-icons/fc';
import { FcEngineering, FcServices, FcWorkflow } from 'react-icons/fc';
import { SiVtex, SiTailwindcss } from 'react-icons/si';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const icon = React.createElement;
import imapr from '../public/assets/images/admin.jpg'


export const tecnologies = [
    {
        name: "JavaScript",
        logo: <SiJavascript size={32} color={'rgb(240, 219, 79)'} />,
    },
    {
        name: "Html",
        logo: <FaHtml5 size={32} color={'#f14a29'} />,
    },
    {
        name: "React",
        logo: <DiReact size={32} color={'#61dafb'} />,
    },
    {
        name: "Typescript",
        logo: <SiTypescript size={32} color={'#3178c6'} />,
    },
    {
        name: "Node.js",
        logo: <FaNodeJs size={32} color={'#5fa04e'} />,
    },
    {
        name: "Postgres",
        logo: <SiPostgresql size={32} color={'#2980b9'} />,
    },
    {
        name: "SQL",
        logo: <TbSql size={32} color={'#0078d4'} />,
    },
    {
        name: "Vtex",
        logo: <SiVtex size={32} color={'#e31c58'} />,
    },
    {
        name: "Redux",
        logo: <SiRedux size={32} color={'#bf4080'} />,
    },
    {
        name: "Css",
        logo: <FaCss3Alt size={32} color={'#2965f1'} />,
    },
    {
        name: "Sass",
        logo: <FaSass size={32} color={'#f14a29'} />,
    },
    {
        name: "Tailwind",
        logo: <SiTailwindcss size={32} color={'rgb(56, 189, 248)'} />,
    }
]

export const projects = [
    {
        category: 'web',
        id: uuidv4(),
        image: '/assets/images/so.png',
        name: "Botom custom Whatsapp Vtex",
        summary: "Como lo indica el título, esta aplicación es un botón personalizado de WhatsApp para ser utilizado principalmente en entornos de desarrollo Vtex. La idea de este botón surge como una mejora en la experiencia del usuario, ya que es posible obtener una forma más de ponerse en contacto.",
        deploy: "",
        code: "https://github.com/Andres21y/vtex-whatsapp-button",
        linkedin: "#",
        tech: ['typeScript', 'node', 'vtex', 'git', 'css']
    },
    {
        category: 'web',
        id: uuidv4(),
        image: '/assets/images/admin.jpg',
        name: "Catch one",
        summary: "Para poner en práctica los conocimientos adquiridos durante el estudio de TypeScript, decidí crear esta aplicación (pokedex) con React-TypeScript para demostrar esta nueva habilidad técnica..",
        deploy: "https://poke-api-chatch.vercel.app/",
        code: "https://github.com/Andres21y/Poke_api_chatch",
        linkedin: "#",
        tech: ['typeScript', 'node', 'react', 'fireBase', 'html']
    },
    {
        category: 'web',
        id: uuidv4(),
        image: '/assets/images/web.png',
        name: "Club Wolves - Voleyball",
        summary: "Este sitio web está diseñado para un club de voleibol. Para facilitar la gestión de los datos del club, se creó un sitio web donde los usuarios pueden registrarse, pudiendo tener diferentes roles, ya sea un usuario registrado sin registrarse a un grupo de voleibol, un jugador registrado o un administrador. También incluye una tienda donde poder acceder y ver los diferentes productos relacionados con el club.",
        deploy: "https://finalproject-one.vercel.app/",
        code: "https://github.com/medinahj21/Final_Project/tree/dev",
        linkedin: "#",
        tech: ['javaScript', 'react', 'redux', 'node', 'fireBase',
            'sql', 'scrum', 'github']
    },
]


export const sofSkill = [
    {
        name: "Espíritu de servicio",
        content: "Me gusta ayudar, dar una mano desinteresada a cualquiera que lo necesite.",
        icon: <FcEngineering size={77} />
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
        id: 2,
        title: 'About',
        path: '/About'
    },
    {
        id: 3,
        title: 'Skills',
        path: '/Skills'
    },
    {
        id: 4,
        title: 'Portfolio',
        path: '/Portfolio'
    },
    {
        id: 5,
        title: 'Experience',
        path: '/Experience'
    },
    {
        id: 6,
        title: 'Contact',
        path: '/Contact'
    },
]