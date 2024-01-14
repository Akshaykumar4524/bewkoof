import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import SortIcon from '@mui/icons-material/Sort';
import ProductCard from './ProductCard';
import { products } from '../data/Products';
import SortBy from './SortBy';
import ScrollToTopButton from './ScrolltoTopButton';

const Products = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:769px)");
    const isMobileScreens = useMediaQuery("(max-width:768px)")
    const isMediumScreens = !(isMobileScreens || isNonMobileScreens)
    return (
        <Grid>
            {!isMobileScreens && <Grid display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ fontSize: 'large', fontWeight: '600', marginTop: '8px' }}>
                    T-Shirts for Men <span style={{ fontSize: 'small', color: 'grey', fontWeight: '500' }}>2139 Products</span>
                </Typography>
                <SortBy/>
                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                        sx={{ width: '230px', marginTop: 0 }}
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        defaultValue={'New Arrivals'}
                        IconComponent={() => null}
                        renderValue={(selected) => (
                            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                <SortIcon />
                                <Typography sx={{ color: 'grey' }}>Sort by:</Typography>
                                <Typography sx={{ fontWeight: '600' }}>{selected}</Typography>
                            </Box>
                        )}
                    >
                        <MenuItem value={'New Arrivals'}>New Arrivals</MenuItem>
                        <MenuItem value={'Popularity'}>Popularity</MenuItem>
                        <MenuItem value={'Price: Low to High'}>Price: Low to High</MenuItem>
                        <MenuItem value={'Price: High to Low'}>Price: High to Low</MenuItem>
                    </Select>
                </FormControl> */}
            </Grid>}
            <Grid display={'flex'} flexWrap={'wrap'} gap={'5%'}>
                {
                    products?.map((product) => {
                        return <ProductCard product={product} />
                    })
                }
            </Grid>
            <ScrollToTopButton/>
        </Grid>
    )
}

export default Products