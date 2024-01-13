import { Typography,  MenuItem, Select, FormControl, Box, useMediaQuery } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import React from 'react'

const SortBy = () => {
    const isMobileScreens = useMediaQuery("(max-width:768px)")

    return (
        <FormControl sx={{ m: 1,width:isMobileScreens?'100%':'250px'}} size="small">
            <Select
                sx={{ width: '100%', marginTop: 0 }}
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
        </FormControl>
    )
}

export default SortBy