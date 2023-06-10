import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../src/components/CustomAppBar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

function FacilityManagement() {
  const router = useRouter()
  return (
   <>
    <CustomAppBar />
      <Box mt ={3} p={2} sx={{paddingX: {xs:'0rem',sm:'0rem',md:'8rem'}}}>
        <Accordion sx={{width: '100%',boxShadow: 'none',borderBottom: 'solid 1px #C7C7C7', borderRadius:'0px'}}>
          <AccordionSummary
              aria-controls="panel1bh-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1bh-header"
          >
            <Typography fontSize={"15px"} fontWeight={300}>
              {"Maintainance services"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%',boxShadow: 'none',borderBottom: 'solid 1px #C7C7C7', borderRadius:'0px'}}>
          <AccordionSummary
              aria-controls="panel1bh-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1bh-header"
          >
            <Typography fontSize={"15px"} fontWeight={300}>
              {"Work wear & Uniforms"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} >
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%',boxShadow: 'none',borderBottom: 'solid 1px #C7C7C7', borderRadius:'0px'}}>
          <AccordionSummary
              aria-controls="panel1bh-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1bh-header"
          >
            <Typography fontSize={"15px"} fontWeight={300}>
              {"Custodial services"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%',boxShadow: 'none',borderBottom: 'solid 1px #C7C7C7', borderRadius:'0px'}}>
          <AccordionSummary
              aria-controls="panel1bh-content"
              expandIcon={<ExpandMoreIcon />}
              id="panel1bh-header"
          >
            <Typography fontSize={"15px"} fontWeight={300}>
              {"Facility management"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'} borderBottom={'solid 1px #C7C7C7'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
            <Box width={'100%'}>
              <Typography p={1} onClick ={()=>{router.push('/product-listing')}} fontSize={"15px"} fontWeight={300}>
                {"Level 3"}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
   </>
  )
}

export default FacilityManagement