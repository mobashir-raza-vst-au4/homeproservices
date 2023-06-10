import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useRouter } from "next/router";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

function CustomAppBar() {
  const router = useRouter();
  console.log("router--->", router.pathname);
  return (
    <Box sx={{ flexGrow: 1, paddingX: {xs:'0rem',sm:'0rem',md:'8rem'}}}>
      <AppBar position="static" sx={{ background: "white", width: '100%'}}>
        <Toolbar sx={{ display: "flex", alignItems: "center", width: '100%' }}>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            // aria-label="open drawer"
          >
            {router.pathname === "/" ? (
              <MenuIcon sx={{ color: "black" }} />
            ) : (
              ""
            )}
            { router.pathname !== '/' ? (
              <ArrowBackIosNewRoundedIcon
                sx={{ color: "black" }}
                onClick={router.back}
              />
            ) : (
              ""
            )}
          </IconButton>
          {["/all-category" , "/" , "/product-listing"].includes(router.pathname)  ? (
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{
                border: "solid 1px black",
                borderRadius: "20px",
                height: {xs:"25px",sm:"25px",md:"35px"},
                width: {xs:'100%',sm:'30%',md:'20%'}
              }}
            >
              {router.pathname !== "/all-category" ||  router.pathname ===  "/product-listing" ? (
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    background: "#F5F5F5",
                    color: "black",
                    fontSize: {xs:"10px",sm:"10px",md:"13px"},
                    boxShadow: "none",
                    borderRight: "solid 1px black",
                    textTransform: "none",
                    height: {xs:"21px",sm:"21px",md:"30px"},
                  }}
                  endIcon={<KeyboardArrowDownIcon sx={{ml: '-10px'}} />}
                >
                 <span style={{paddingLeft: '10px'}}>Products</span>
                </Button>
              ) : (
                ""
              )}
              <input
                style={{
                  border: "none",
                  background: "transparent",
                  width: "100%",
                  outline: "none",
                }}
                placeholder={`${router.pathname === '/all-category' ? 'Search category for insights' : 'Search by Products & services'}`}
              />
              <SearchOutlinedIcon
                fontSize="small"
                sx={{ color: "black", mr: 1 }}
              />
            </Box>
          ) : (
            ""
          )}
          {router.pathname === "/product-listing" ? (
            <GridViewOutlinedIcon sx={{ color: "black", ml:'10px' }} />
          ) : (
            ""
          )}
          {router.pathname === "/" ? (
            <FilterListRoundedIcon fontSize="small" sx={{ color: "#3665F3", ml: '10px' }} />
          ) : (
            ""
          )}
          {router.pathname === "/" ? (
            <Typography color={"#3665F3"} fontSize={{xs:"12px",sm:"12px",md:'16px'}}>
              {"Filter"}
            </Typography>
          ) : (
            ""
          )}
          {router.pathname === "/facility-management" ? (
            <Typography
              color={"black"}
              fontSize={"14.86px"}
              fontWeight={500}
              width={"100%"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {"Facility management"}
            </Typography>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
