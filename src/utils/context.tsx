'use client'
import React, { useState, createContext, useContext } from 'react';
import { ContextProps, StateProps, StateProviderProps } from './interfaces';

const initialState: StateProps = {
    projects: [],
    themeMode: false,
    skills: [],
    tech: [],
    experience: [],
    links:[]
};

export const StateContext = createContext<ContextProps>({
    state: initialState,
    setState: () => { },
});

export const useAppContext = () => useContext(StateContext);

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [state, setState] = useState<StateProps>(initialState);

    return (
        <StateContext.Provider value={{ state, setState }}>
            {children}
        </StateContext.Provider>
    );
};