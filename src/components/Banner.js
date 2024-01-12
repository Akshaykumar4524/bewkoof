import { Image } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <Grid>
            <img alt='banner' width='100%' height={'250px'} src={banner} />
        </Grid>
    )
}

export default Banner