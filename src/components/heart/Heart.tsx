'use client'
import React, { useState, useEffect } from 'react';
import styles from './heartBeat.module.css';
import { BsFillHeartFill } from 'react-icons/bs';

const HeartBeat = () => {
    const [currentColor, setCurrentColor] = useState('yellow');
    const colors = ['yellow', 'blue', 'red'];
    const colorIndexRef = React.useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
            setCurrentColor(colors[colorIndexRef.current]);
        }, 1000); 

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.heart} style={{ color: currentColor }}>
            <BsFillHeartFill size={32} />
        </div>
    );
};

export default HeartBeat;




