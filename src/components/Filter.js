import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import AccordionUsage from './Accordion'
import { FilterData } from '../data/FilterData'


const Filter = () => {
    const isMobileScreens = useMediaQuery("(max-width:768px)")
    return (
        <Grid mt={'8px'} p={isMobileScreens?'10px':''} >
            <Grid display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ fontSize: 'large', fontWeight: '600' }}>Filters(5)</Typography>
                <Typography sx={{ color: '#3da9c3' }}>Clear All</Typography>
            </Grid>
            {
                FilterData?.map((data) => {
                    return <>
                        <Divider sx={{ borderBottom: '2px solid #b7b6b6',marginTop:'15px', marginBottom:'15px' }} />
                        <AccordionUsage title={data?.title} list={data?.items} show={data?.show} />
                    </>
                })
            }
        </Grid>
    )
}

export default Filter