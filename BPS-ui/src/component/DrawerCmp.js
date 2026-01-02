import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PAGES from "./constants";
import DropdownOptions from "./common/DropdownOptions";
import DropdownOptionsMobile from "./common/DropdownOptionsMobile";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// const PAGES = ["Home", "About Us", "Services", "Contact Us"]

const DrawerCmp = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerId, setOpenDrawerId] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event, i) => {
    setOpenDrawerId(i);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      {/* <Drawer style={{position: 'relative!important'}} open={openDrawer} onClose={() => setOpenDrawer(false)}> */}
        {openDrawer &&
        <div style={{position:"absolute", top:"100%", left: 0, background: 'papayawhip', height:'100vh'}}>
        <List>
        {PAGES.map((page, index) => (
          <div 
          // onMouseEnter={(e) => {
          //   console.log("coming enter")
          //   handleMouseEnter(e, index)
          //   }}
            // onMouseLeave={()=>{
            //   console.log("coming close")
            //   if(index !== openDrawerId){
            //     handleMouseLeave();
            //   }
            // }}

            onClick={(e)=>{
              handleMouseEnter(e, index)
            }}
            >
            <ListItemButton key={index}>
              <ListItemText style={{color: 'red'}}>{page.title}&nbsp;{page.item.length > 0 && 
              <span style={{marginTop: '1rem'}}>
                <ArrowDropDownIcon style={{ fontSize: 'medium'}}  />
                </span>
                }</ListItemText>
              
            </ListItemButton>

            <div
            >
              {openDrawerId === index && (
                <DropdownOptionsMobile
                  {...props}
                  pathname={page.path}
                  key={index}
                  title={page.title}
                  data={page.item}
                  path={page.path}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleMouseLeave={handleMouseLeave}
                  anchorvertical="top"
                  anchorhorizontal="right"
                  transformvertical="top"
                  transformhorizontal="left"

                  style={{
                    left: '10%',
                    position: 'relative',
                    right: '10%',
                  }}
                />
              )}
            </div>
          </div>
        ))}
        </List>
        </div>}
      {/* </Drawer> */}

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOpenIcon 
        style={{ color: "brown", fontSize: "large" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerCmp;
