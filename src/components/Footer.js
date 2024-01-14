import { Box, Button, Divider, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import gpay from "../assets/gpaynew.webp";
import paytm from "../assets/paytm.png";
import phonepe from "../assets/phonepe.png";
import visa from "../assets/visa1.png";
import mastercard from "../assets/mastercardnew.png";
import rupay from "../assets/rupay.webp"
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
const Footer = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:769px)");
    return (
        <>
            {
                isNonMobileScreens && <Grid bgcolor={'black'} p={'3%'}>
                    <Grid color={'white'} display={'flex'} justifyContent={'space-between'}>
                        <Grid display={'flex'} gap={'30px'}>
                            <Grid p={'20px'}>
                                <Typography className='footer-heading'>About Bewakoof</Typography>
                                <Typography className='footer-sub'>Who are we?</Typography>
                                <Typography className='footer-sub'>We re Hiring</Typography>
                                <Typography className='footer-sub'>Terms & Conditions</Typography>
                                <Typography className='footer-sub'>Privacy Policy</Typography>
                                <Typography className='footer-sub'>Blog</Typography>
                            </Grid>
                            <Grid p={'20px'}>
                                <Typography className='footer-heading'>Customer Service</Typography>
                                <Typography className='footer-sub'>Contact us</Typography>
                                <Typography className='footer-sub'>Track order</Typography>
                                <Typography className='footer-sub'>Return order</Typography>
                                <Typography className='footer-sub'>Cancel order</Typography>
                            </Grid>
                            <Grid p={'20px'}>
                                <Typography className='footer-heading'>Quick Links</Typography>
                                <Typography className='footer-sub'>Offers</Typography>
                                <Typography className='footer-sub'>Sitemap</Typography>
                                <Typography className='footer-sub'>Brand stores</Typography>
                                <Typography className='footer-sub'>Fanbook</Typography>
                            </Grid>
                        </Grid>
                        <Grid p={'20px'}>
                            <Typography className='footer-heading'>Get updates on your inbox</Typography>
                            <Grid display={'flex'} gap={'10px'} mb={'30px'} flexWrap={'wrap'}>
                                <TextField
                                    sx={{ width: '260px' }}
                                    variant='standard'
                                    placeholder="Enter your email address"
                                    size="medium"
                                    fullWidth
                                    className='search-field'
                                    InputProps={{
                                        disableUnderline: true,
                                    }} />
                                <Button
                                    sx={{
                                        backgroundColor: '#ffc500',
                                        color: 'black',
                                        paddingLeft: '20px',
                                        paddingRight: '20px'
                                    }}
                                >Subscribe</Button>
                            </Grid>
                            <Typography className='footer-sub' display={'flex'} alignItems={'center'} gap={'6px'}><LocalShippingIcon /> 15 Days Return Policy*</Typography>
                            <Typography className='footer-sub'> 💶 Cash On Delivery*</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ borderBottom: '2px solid grey' }} />
                    <Grid color={'white'} display={'flex'} justifyContent={'space-between'} mt={'30px'}>
                        <Grid>
                            <Typography className='logo' color={'#ffc500'}>Bewkoof</Typography>
                            <Typography className='footer-sub'>Shipping Policy | Cancellation Policy</Typography>
                            <Typography className='footer-sub'>® 2023 Bewakoof Private Limited. All Rights Reserved.</Typography>
                            <Typography className='footer-sub' display={'flex'} gap={'50px'}>
                                <InstagramIcon />
                                <TwitterIcon />
                                <PinterestIcon />
                            </Typography>

                        </Grid>
                        <Grid>
                            <Typography className='footer-heading'>100% Secure Payment</Typography>
                            <Grid display={'flex'} gap={"10px"} flexWrap={'wrap'}>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={gpay} />
                                </Typography>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={paytm} />
                                </Typography>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={phonepe} />
                                </Typography>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={mastercard} />
                                </Typography>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={visa} />
                                </Typography>
                                <Typography className='payment-box'  >
                                    <img alt='gpay' width={'40px'} height={'25px'} src={rupay} />
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid>
                            <Typography className='footer-heading'>Download The App</Typography>
                            <Grid display={'flex'} gap={'10px'} flexWrap={'wrap'}>
                                <Typography className='payment-box' color={'black'} display={'flex'} alignItems={'center'}  >
                                    <AppleIcon htmlColor='black' /> App Store
                                </Typography>
                                <Typography className='payment-box' color={'black'} display={'flex'} alignItems={'center'}  >
                                    <ShopIcon htmlColor='black' /> Google Play
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default Footer