import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Grid, Typography } from '@mui/material';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '60px', right: '20px', zIndex: '1000' }}>
            {isVisible && (
                <Grid sx={{ backgroundColor: '#808080a1', display: 'flex', flexDirection: 'column', padding: '10px', color: 'white' }} onClick={scrollToTop} >
                    <ArrowUpwardIcon />
                    <Typography>Top</Typography>
                </Grid>
            )}
        </div>
    );
};

export default ScrollToTopButton;