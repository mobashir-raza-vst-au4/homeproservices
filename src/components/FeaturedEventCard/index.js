import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'

function FeaturedEventCard() {
  return (
    <>
        <Card sx={{ maxWidth: 345, minWidth: 290, borderRadius: '5px', m:1}} elevation={3}>
            <CardContent>
                <Box display={'flex'} gap={1}>
                    <Chip label="New"  sx ={{borderRadius:'10px', backgroundColor:'#2398F6', color: 'white'}} />
                    <Chip label="Scheduled"  sx ={{borderRadius:'10px', backgroundColor:'#2398F6', color: 'white'}} />

                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography sx ={{fontfontSize: '5px',  fontWeight:600}}>
                        {"Requirement of "}
                    </Typography>
                    <Box width={'35.2px'} height={'35.2px'} >
                        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'13.1px'} borderRadius={'10px 10px 0px 0px'} bgcolor={'#2398F6'}>
                            <Typography color={'white'} fontSize={'8px'}>
                                {"Nov"}
                            </Typography>
                        </Box>
                        <Typography fontSize={'14px'} color="#2398F6" sx ={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            {"8"}
                        </Typography>
                    </Box>
                </Box>
                <Typography sx ={{fontfontSize: '8px',  fontWeight:400}}>
                    {"Sat, 02:PM onwards"}
                </Typography>
                <Box display={'flex'} mt={1}>
                    <Avatar  />
                    <Box ml={1}>
                        <Typography fontSize={'14px'} color ={"#1A1A1A"}>
                            {"Andrew Smith"}
                        </Typography>
                        <Typography fontSize={'14px'} color ={"#585858"}>
                            {"Global foundries"}
                        </Typography>
                    </Box>
                </Box>
                <Box display={'flex'} mt={1} alignItems={'center'}>
                    <Avatar sx={{height:30, width:30, boxShadow: 3,p:1}} src ='/images/Group.svg' />
                    <Box ml={1}>
                        <Typography fontSize={'14px'} color ={"#1DDDC7"}>
                            {"one on one"}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    </>
  )
}

export default FeaturedEventCard