import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../src/components/CustomAppBar'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CustomCard from '../../src/components/CustomCard';
import FeaturedEventCard from '../../src/components/FeaturedEventCard';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import Link from 'next/link'

function LandingPage() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const router = useRouter()

      const handleClick = e => {
        e.preventDefault()
        return <Link href="/dashboard">Dashboard</Link>
    }
  return (
    <Box >
        <CustomAppBar />
        <Box sx={{ flexGrow: 1, p: 1.5,paddingX:{xs:'12px',sm:'12px',md:'8rem'} }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={1.3} sm={2.6} md={4} key={index} >
                    <Item sx ={{background:'#C4C4C4',borderRadius: '0px', display:'flex', justifyContent:'center',alignItems: 'center'}}>
                        <Typography sx ={{fontSize: {xs:'8px', sm:'10px',md:'10px'}, whiteSpace: 'nowrap'}}>
                            {"Request anything"}
                        </Typography>
                    </Item>
                </Grid>
                ))}
            </Grid>
            <Box width ={'100%'} borderRadius={'15px'} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={2}>
                <img src='/images/landingImg.svg' style={{width: '100%', height: '100%'}} />
            </Box>
            <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                <Typography sx ={{fontfontSize: '18px', whiteSpace: 'nowrap', fontWeight:600}}>
                    {"Explore Popular Categories"}
                </Typography>
                <Typography sx ={{fontSize: '14px', whiteSpace: 'nowrap', color:'#4D79EB', cursor:'pointer'}} onClick ={()=>{router.push('/all-category')}}>
                    {"View all"}
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2} width={'100%'}  sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }}}>
                <Box display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'}>
                    <img src='/images/img1.svg' />
                    <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                    {"Facility Management"}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'}>
                    <img src='/images/img1.svg' />
                    <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                        {"Facility Management"}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'}>
                    <img src='/images/img1.svg' />
                    <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                        {"Facility Management"}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} bgcolor={'#F5F5F5'} borderRadius={3} alignItems={'center'} p ={2} justifyContent={'center'}>
                    <img src='/images/img1.svg' />
                    <Typography sx ={{fontSize: '10px', whiteSpace: 'nowrap',mt:1}}>
                        {"Facility Management"}
                    </Typography>
                </Box>
            </Box>
            <Box width={'100%'} >
                <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                    <Typography sx ={{fontfontSize: '18px', whiteSpace: 'nowrap', fontWeight:600}}>
                        {"Trending Auctions"}
                    </Typography>
                    <Typography sx ={{fontSize: '14px', whiteSpace: 'nowrap', color:'#4D79EB'}}>
                        {"View all"}
                    </Typography>
                </Box>
                <Typography sx ={{fontSize: '12px',  color:'#5F5F5F',mt:1}}>
                    {"See what's popular across thousands of Auctions"}
                </Typography>
                <Box width={'100%'} display={'flex'} sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }, mt:2, gap:1}}>
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </Box>
            </Box>
            <Box width={'100%'}>
                <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                    <Typography sx ={{fontfontSize: '18px', whiteSpace: 'nowrap', fontWeight:600}}>
                        {"Featured products"}
                    </Typography>
                    <Typography sx ={{fontSize: '14px', whiteSpace: 'nowrap', color:'#4D79EB'}}>
                        {"View all"}
                    </Typography>
                </Box>
                <Typography sx ={{fontSize: '12px',  color:'#5F5F5F',mt:1}}>
                    {"See what's popular across thousands of Products"}
                </Typography>
                <Box width={'100%'} display={'flex'} sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }, mt:2, gap:1}}>
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </Box>
            </Box>
            <Box width={'100%'}>
                <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                    <Typography sx ={{fontfontSize: '18px', whiteSpace: 'nowrap', fontWeight:600}}>
                        {"Featured Services"}
                    </Typography>
                    <Typography sx ={{fontSize: '14px', whiteSpace: 'nowrap', color:'#4D79EB'}}>
                        {"View all"}
                    </Typography>
                </Box>
                <Typography sx ={{fontSize: '12px',  color:'#5F5F5F',mt:1}}>
                    {"See what's popular across thousands of Products"}
                </Typography>
                <Box width={'100%'} display={'flex'} sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }, mt:2, gap:1}}>
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </Box>
            </Box>
            <Box width={'100%'}>
                <Box display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={2}>
                    <Typography sx ={{fontfontSize: '18px', whiteSpace: 'nowrap', fontWeight:600}}>
                        {"Featured Events"}
                    </Typography>
                    <Typography sx ={{fontSize: '14px', whiteSpace: 'nowrap', color:'#4D79EB'}}>
                        {"View all"}
                    </Typography>
                </Box>
                <Typography sx ={{fontSize: '12px',  color:'#5F5F5F',mt:1}}>
                    {"See what's popular across thousands of Products"}
                </Typography>
                <Box width={'100%'} display={'flex'} sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }, mt:2, gap:1}}>
                    <FeaturedEventCard />
                    <FeaturedEventCard />
                    <FeaturedEventCard />
                </Box>
            </Box>
        </Box>
    </Box>

  )
}

export default LandingPage