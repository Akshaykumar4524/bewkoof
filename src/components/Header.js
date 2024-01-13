import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import { useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Header = () => {

    const isNonMobileScreens = useMediaQuery("(min-width:1060px)");
    const isMobileScreens = useMediaQuery("(max-width:768px)")
    const isMediumScreens = !(isMobileScreens || isNonMobileScreens)


    return (
        <>
            <Grid className='header-container'>
                <Grid className='header-left'>
                    {isMobileScreens &&
                        <Grid display={'flex'} alignItems={'center'} gap={'7px'}>
                            <ArrowBackIosNewIcon />
                            <Grid>
                                <Typography sx={{ fontSize: 'x-small', fontWeight: 600 }}>Men's Boyfriend Tshir...</Typography>
                                <Typography sx={{ fontSize: 'xx-small', color: 'grey' }}>807 items</Typography>
                            </Grid>
                        </Grid>
                    }

                    {
                        (isNonMobileScreens || isMediumScreens) &&
                        <>
                            <Typography className='logo'>Bewkoof</Typography>
                            <Typography className='sections'>Men</Typography>
                            <Typography className='sections'>Women</Typography>
                            <Typography className='sections'>Accessories</Typography>
                        </>
                    }
                </Grid>
                <Grid className='header-right'>
                    {isNonMobileScreens ?
                        <Grid className='search-box'>
                            <TextField
                                variant='standard'
                                placeholder="Search by products"
                                size="medium"
                                fullWidth
                                className='search-field'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlined />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                }} />
                        </Grid>
                        :
                        <SearchOutlined />
                    }
                    <Grid className='header-icons'>
                        <PermIdentityIcon />
                        {!isMobileScreens && <Typography>Account</Typography>}
                    </Grid>
                    <Grid className='header-icons'>
                        <FavoriteBorderIcon />
                        {!isMobileScreens && <Typography>Whitelist</Typography>}
                    </Grid>
                    <Grid className='header-icons'>
                        <ShoppingCartCheckoutIcon />
                        {!isMobileScreens && <Typography>Cart</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Header