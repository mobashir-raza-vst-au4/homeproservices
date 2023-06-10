import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../src/components/CustomAppBar'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

function AllCategory() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const router = useRouter()

  return (
   <>
    <CustomAppBar />
    <Box mt={2} sx ={{paddingX:{xs:'25px',sm:'25px',md:'8rem'}}}>
        <Typography fontSize={'14px'} fontWeight={400} color={'#222222'}>
            {"Recent"}
        </Typography>
        <Box display={'flex'} alignItems={'center'} gap={2} mt={2} width={'100%'}>
            <Box sx={{cursor: 'pointer'}} display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'} onClick ={()=>{router.push('/facility-management')}}>
                <img src='/images/img1.svg' />
                <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                {"Facility Management"}
                </Typography>
            </Box>
            <Box sx={{cursor: 'pointer'}} display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'} onClick ={()=>{router.push('/facility-management')}}>
                <img src='/images/img1.svg' />
                <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                    {"Facility Management"}
                </Typography>
            </Box>
        </Box>
        <Box mt={2} mb={1}>
            <Typography pography fontSize={'14px'} fontWeight={400} color={'#222222'}>
                {"All Categories"}
            </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(10)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} sx={{boxShadow:'none'}} >
                    <Item sx ={{background:'#F5F5F5',borderRadius: 3,boxShadow:'none', display:'flex', flexDirection:'column', justifyContent:'center',alignItems: 'center'}}>
                        <img src='/images/img1.svg' />
                        <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                            {"Facility Management"}
                        </Typography>
                    </Item>
                </Grid>
                ))}
            </Grid>
    </Box>
   </>
  )
}

export default AllCategory