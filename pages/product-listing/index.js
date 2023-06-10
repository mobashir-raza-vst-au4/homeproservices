import { Accordion, AccordionDetails, Paper, Box, Chip, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import CustomAppBar from '../../src/components/CustomAppBar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import CustomCard from '../../src/components/CustomCard';
import { experimentalStyled as styled } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function ProductListing() {
    const [value, setValue] = React.useState(0);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
   <>
    <CustomAppBar />
    <Box sx ={{paddingX:{xs:'1rem',sm:'1rem',md:'8rem'}}}>
        <Typography fontSize={'12px'} fontWeight={400} mt={2} mb={1}>
            {"Facility management > Maintainanance services >"}
            <span style={{fontWeight: 600}}> level 3</span>
        </Typography>
            <Box display={'flex'} sx ={{overflowX: 'scroll', '&::-webkit-scrollbar':{ display:'none' }}} gap={1}>
            <Chip label="All"  sx ={{color: 'black'}} />
            <Chip label="Maintainance services"  sx ={{color: 'black'}} />
            <Chip label="Work wear & Uniforms"  sx ={{color: 'black'}} />
            <Chip label="View all"  sx ={{color: 'black'}} />

        </Box>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Auction" {...a11yProps(1)} />
            <Tab label="Buy It Now" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(10)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} sx={{boxShadow:'none'}} >
                    <Item sx ={{borderRadius: 3,boxShadow:'none', display:'flex'}}>
                        <CustomCard />
                    </Item>
                </Grid>
                ))}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        </Box>
    </Box>
   </>
  )
}

export default ProductListing