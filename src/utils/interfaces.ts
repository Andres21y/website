import React from 'react';


export interface Project {
    id: string;
    image: string;
    name: string;
    summary: string;
    deploy: string;
    code: string;
    linkedin: string;
    tech: any[];
    category: string
}

export interface Skill {
    name: string;
    content: string;
    icon: React.JSX.Element;
}
export interface Tech {
    name: string;
    logo: React.JSX.Element;
}
export interface Link {
    id: number;
    title: string;
    path: string
}

export interface Experience {
    title: string;
    location: string;
    company: string;
    date: string;
    icon: JSX.Element;
    summary:string
}

export interface StateProps {
    projects: Project[];
    themeMode: boolean;
    skills: Skill[];
    tech: Tech[];
    experience: Experience[];
    links: Link[]
}

export interface ContextProps {
    state: StateProps;
    setState: React.Dispatch<React.SetStateAction<StateProps>>;
}

export interface StateProviderProps {
    children: React.ReactNode;
}
