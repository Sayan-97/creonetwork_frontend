import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTopButton = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const viewPortHeight = window.innerHeight
        const scrollThreshold = viewPortHeight
        if (scrollTop > scrollThreshold) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={handleClick} 
            className={`fixed ${showButton ? 'bottom-10' : '-bottom-[50%]'} right-10 bg-primaryGradient rounded-full p-4 z-50 transition-all ease-in-out duration-300`}
        >
            <AiOutlineArrowUp />
        </button>
    )
}

export default ScrollToTopButton