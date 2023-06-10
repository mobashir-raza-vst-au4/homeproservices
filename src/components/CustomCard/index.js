import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function CustomCard() {
  return (
    <>
        <Card sx={{ maxWidth: 345, minWidth:130, boxShadow:'none' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/images/IMAGE.svg"
                title="green iguana"
            />
            <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'flex-start', justifyContent:'start'}}>
                <Typography sx ={{fontSize:'14px', fontWeight: 400, textAlign:'start'}} >
                    {"MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!"}
                </Typography>
                <Typography sx ={{fontSize:'14px', fontWeight: 400}} >
                    {"$18.50"}
                </Typography>
                <Typography variant="body2" fontSize={'14px'} color="text.secondary">
                    {"Time left"}
                </Typography>
                <Typography variant="body2" fontSize={'12px'} color="#F40000">
                    {"6d 13h 52 sec"}
                </Typography>
                <Typography variant="body2" fontSize={'11px'} color="text.secondary">
                    {"5 bids"}
                </Typography>
                <Typography variant="body2" fontSize={'11px'} color="text.secondary">
                    {"+$11.60 shipping"}
                </Typography>
            </CardContent>
        </Card>
    </>
  )
}

export default CustomCard