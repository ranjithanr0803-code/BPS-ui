// Footer.js

import React from 'react';
// import './Footer.css';
import Img3 from "./../images/bps-quickLinks.jpg";
import { Typography,Button } from '@mui/material';
import WhatsAppContact from "./whatsApp";
import { useNavigate } from 'react-router';
import image1 from '../images/Home-page-image.jpeg'



const FooterContactus = () => {
  return (
    <section id="footer" >
      <Typography style={{color:"black",textAlign:'center',
          backgroundImage: `url(${Img3})`,
          backgroundSize: "cover",
      
 }}>
  
      <div className="container">
        
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="javascript:void();"><i className="fa fa-angle-double-right" ></i>Home</a></li>
              <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About Us</a></li>
              <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
              <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Products</a></li>
              {/* <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Services</a></li> */}
             {/* Add more links as needed */}
            </ul>
          </div>
          {/* Repeat the structure for other columns */}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              {/* <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li> */}
              {/* <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
              <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li> */}
            </ul>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">&copy; All rights reserved. <a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
          </div> */}
        </div>
      </div>
      </Typography>
      
    </section>
  );
};

// const navigate=useNavigate();
// <>
// return(
//   <div style={{width:'100%', marginLeft:'10px', marginTop:'20px', }}>
//   <Button variant="contained" color="primary" onClick={()=>{
//   navigate("/contact")
// }} >


// Click Here to Contact Us 
// </Button>20
// {/* <space>
// <AddIcCallIcon/></space> */}

// </div>
// <div style={{width:'100%', marginLeft:'10px', marginTop:'40px',
// marginBottom:'20px',}}>
// <WhatsAppContact />

// {/* <LinkedInLink /><LinkedInIcon/> */}
// </div>

// )</>


export default FooterContactus;
