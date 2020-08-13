import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    useEffect(() => {
        Boolean(darkMode)
            ? document.body.classList.add('dark-mode')
            : document.body.classList.remove('dark-mode');
    }, [darkMode]);

    const toggleDarkMode = () => {setDarkMode(!darkMode)}
    
    return [darkMode, toggleDarkMode];
}

export default useDarkMode;