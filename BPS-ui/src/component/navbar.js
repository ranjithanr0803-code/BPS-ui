import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessCenterIcon from "./../images/SGLtechLogo.png";

import DrawerCmp from "./DrawerCmp";
import Dropdown from "./dropdown";
import Logo from "./../images/SGLtechLogo.png";
import PAGES from './constants';
const Navbar = () => {
  // const toggleDrawer = (open) => (event) => {
  //   setOpenDrawer(open);
  // };

  // return (
  // <>
  //   <AppBar position="static" >
  //     <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
  //       <IconButton edge="start" color="inherit"  onClick={toggleDrawer(true)}>
  //         <MenuIcon />
  //       </IconButton>

  //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Welcome</Typography>
  //     </Toolbar>
  //   </AppBar>
  //   <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
  //     <List>
  //       <ListItem button>
  //         <ListItemText primary="Home" />
  //           <ul>
  //             <li>
  //               <a href="/">Overview</a>
  //             </li>
  //             <li>
  //             <a href="/">Team</a>

  //             </li>
  //           </ul>
  //         </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="About Us" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="Services" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemText primary="Contact" />
  //       </ListItem>
  //     </List>
  //   </Drawer>
  // </>
  // <React.Fragment>
  //  <AppBar>
  //  <Toolbar>
  //   <Typography>
  //     Home Page
  //   </Typography>
  //   </Toolbar>
  //  </AppBar>
  // </React.Fragment>
  // );
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    
    <React.Fragment>
      <AppBar 
      // sx={{ backgroundColor: "#6666" }}
      className="navbar-header"
      >
        <Toolbar  className="navbar-header-height" style={{ height:'100%!important',}}>
          {/* <Typography sx={{fontSize:'2rem',
      paddingLeft:'10px',
       fontFamily:'Roboto'}}>
       SGL
     </Typography> */}

{/* <Logo/> */}

          <img src ={BusinessCenterIcon} alt="Logo" style={{ color:'brown', marginTop:"-1.2rem", marginLeft:"-0.5rem", width:'120px', height:'80px'}} />
            {/* <Logo style={{height: '40px',marginRight: 'auto',}} /> */}
          <Typography
                sx={{
                  fontSize: "1.8rem",
                  marginLeft : "0.5rem",
                  // paddingLeft: "10px",
                  fontFamily: "Poppins",
                  // fontStyle:"Italic",
                  marginTop:"10px",
                  color:"purple",
                  fontWeight:"bold",
                }}
              >
               <p> TECH</p>
              </Typography>
          {isMatch ? (
            <>
             
              <DrawerCmp 
              
              />
            </>
          ) : (
            <>
            {/* Tabs */}

              <div
                style={{
                  // marginLeft: "200px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontFamily:'sans-serif',
                  // height: "100%",
                  
                  
                }}
                textColor="black"
                variant="fullWidth"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                // className="navbar-header"
              >
                
                  <Dropdown
                  />

                {/* <Tab label="Home" />
     <Tab label="About Us"/>
     <Tab label="Services"/>
     <Tab label="Contact"/> */}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
