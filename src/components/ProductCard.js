import { Star } from '@mui/icons-material'
import { Chip, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
const ProductCard = ({ product }) => {
  const { image, brandName, rate, rating, totalrating, material, label, prodName } = product;
  const isMobileScreens = useMediaQuery("(max-width:768px)")
  const color = {
    'Buy 1 Get 1': 'white',
    'Few Left': 'white',
    'Flash Sale': 'black',
    'Regular Fit': 'white'
  }
  const backGround = {
    'Buy 1 Get 1': 'green',
    'Few Left': 'red',
    'Flash Sale': '#fff4e6',
    'Regular Fit': 'grey'
  }
  return (
    <Grid width={!isMobileScreens ? '30%' : '47.5%'} mb={'20px'}>
      <Grid position={'relative'}>
        <img alt='brand' width={'100%'} src={require("../assets/" + image + '.webp')} />
        <Chip
          size='small'
          label={label}
          style={{
            color: color[label],
            backgroundColor: backGround[label],
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            borderRadius: '0'
          }}
        />
        <Chip
          size='small'
          label={<Typography fontSize={'small'} display={'flex'} alignItems={'center'}><Star fontSize='small' htmlColor='rgb(255, 200, 0)' /> {rating} | {totalrating} </Typography>}
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            zIndex: 1,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '0'
          }}
        />
      </Grid>
      <Typography sx={{ fontSize: 'small', fontWeight: '600' }}>{brandName}</Typography>
      <Typography className='product-style'>{prodName}</Typography>
      <Typography sx={{ fontSize: 'small', fontWeight: '600' }}>₹{rate} <span style={{ fontWeight: '500' }}>MRP: ₹{rate}</span> <span style={{ fontWeight: '500', color: 'green' }}>(Save 50%)</span> </Typography>
      <Typography sx={{ fontSize: 'small', fontWeight: '600', backgroundColor: 'rgb(255, 200, 0)', padding: '3px', width: 'fit-content' }} >₹{rate} For Tribe Members</Typography>
      <Typography sx={{ fontSize: 'small', color: 'grey', border: '1px solid grey', width: 'fit-content', padding: '3px', marginTop: '5px' }}>{material}</Typography>
    </Grid>
  )
}

export default ProductCard