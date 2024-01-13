import { Grid, Typography, useMediaQuery,  InputAdornment, TextField } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useEffect, useState } from 'react'
import Filter from './Filter';
import Products from './Products';
import TemporaryDrawer from './Drawer';
import SortBy from './SortBy';
import FilterListIcon from '@mui/icons-material/FilterList';

const Content = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const isNonMobileScreens = useMediaQuery("(min-width:769px)");
    const isMobileScreens = useMediaQuery("(max-width:768px)")
    const isMediumScreens = !(isMobileScreens || isNonMobileScreens)

    useEffect(() => {
        if (!isMobileScreens) {
            setIsFilterOpen(false)
        }
    }, [isMobileScreens])
    return (
        <Grid p={!isMobileScreens ? '1% 6% 2% 6%' : '1% 1% 2% 1%'}>
            {!isMobileScreens &&
                <Grid display={'flex'} alignItems={'center'} >
                    <Typography sx={{ fontSize: 'small', fontWeight: '600' }}>Home</Typography>
                    <ChevronRightIcon htmlColor='grey' sx={{ fontSize: 'medium' }} />
                    <Typography sx={{ fontSize: 'small', fontWeight: '600' }}>Men's Clothing</Typography>
                    <ChevronRightIcon htmlColor='grey' sx={{ fontSize: 'medium' }} />
                    <Typography sx={{ fontSize: 'small', color: 'grey' }}>Men's T-Shirts</Typography>
                </Grid>}
            <Grid display={'flex'} gap={'3%'} pt={'1%'}>
                {!isMobileScreens &&
                    <Grid width={'25%'}>
                        <Filter />
                    </Grid>}
                <Grid width={!isMobileScreens ? '75%' : '100%'} position={'relative'}>
                    <Products />
                    {
                        isMobileScreens && <Grid position={'fixed'} zIndex={51} bottom={0} width={'100%'} sx={{ backgroundColor: 'white' }} display={'flex'} alignItems={'center'} gap={'2%'}>
                            <Grid width={'48%'} display={'flex'}>
                                <SortBy />
                            </Grid>
                            <TextField
                                variant='outlined'
                                onClick={() => setIsFilterOpen(true)}
                                size="small"
                                multiline
                                sx={{ width: '48%', backgroundColor: 'white' }}
                                value={'Filter Size +3'}
                                className='search-field'
                                InputProps={{
                                    readOnly: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FilterListIcon />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                }} />
                        </Grid>
                    }
                    {
                        isFilterOpen && <TemporaryDrawer handleClose={() => setIsFilterOpen(false)} />
                    }
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Content