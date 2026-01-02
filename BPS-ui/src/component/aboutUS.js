import { Grid, Typography } from "@mui/material";
import React from "react";
import Img4 from "../images/img4.jpg";
import Navbar from "./navbar";
import { SpaceBar } from "@mui/icons-material";
import DetailsCard from "./landing_page/DetailsCard";
import Img3 from "./../images/contactImg2.jpeg";
import circleDia from "./../images/CircleDia.jpeg"
// import Logo from "./../images/SGLtechLogo.png"
import Logo from "./../images/BPS_Logo-removebg-preview (1).png"

import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import FireTruckSharpIcon from '@mui/icons-material/FireTruckSharp';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const AboutUS = () => {
  return (
    <>
      <div
        className="aboutUs navbar"
        style={{
          // backgroundImage:`url(${Img3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "90vh",
          backgroundPosition: "center 0.5%  !important",
          background: "linear-gradient(to bottom, #536db5, #f5875fff)", // Add your gradient here
          // background: "linear-gradient(to bottom, #6981a1,#6b74a4,#6981a1,#746e8f,#727ec1,#868e9d,#4c6388,#94bbe9)", // Add your gradient here
          
        }}
      >
        <container className="aboutUsContainer">
        <div
                style={{
                  textAlign:"center",
                  fontSize:"4rem",
                  marginLeft:"150px",
                  marginRight:"150px",
                  fontFamily:"Fraktur",
                  color:"white"
                }}>About Us</div>
          <Grid container spacing={2}>
            <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>
            <Grid item md={5} lg={5} xs={5} sm={5} xl={5}>
              <Typography
                variant="h6"
                // className="paragraph-texts navbar"
                // marginRight={"100px"}
                // marginLeft={"100px"}
                marginTop={"50px"}
                marginBottom={"30px"}
                style={{ color:"white"}}
                
              >
               
                BPS is Registered and recognized,<b> Name plates</b> and
                <b> sticker </b>
                manufacturer since 2025. wholesaler and trader of varied range
                of printing Products and Materials like{" "}
                <b>aluminium name plate</b> (Involves Anodize Technology),
                <b> brass</b> and <b>SS etched plates</b>, multicolor name plats
                with <b>lazer marking</b> solutions,
                <b>poly carbonate stickers</b>, <b>vinyl stickers</b>,{" "}
                <b>digital stickers</b>, these are presented by us in standard
                and modified forms to our clients. To add, the only optimum
                class material is utilized in their production. These presented
                by us in various provisions, these are inspected sternly to
                retain their optimum quality.We manufacture products under our
                own brand name "BPS".
                <br />
              </Typography>
            </Grid>
            <Grid
             item md={2} lg={2.6} xs={2} sm={2} xl={2}
            style={{height:"100px",width:"100px", marginTop:"150px",marginLeft:"20px",marginRight:"50px",
   backgroundImage: `url(${Logo})`,

            }}>
            {/* <img src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?w=1060&t=st=1710262698~exp=1710263298~hmac=00079a63aa7e681f0cf514b757efde89fca04c01c5c160af5551af9a61c6010a" height="100%" width="100%" /> */}
          
            </Grid>
            {/* <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>

            <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>
              <Grid item md={5} lg={5} xs={5} sm={5} xl={5}
              style={{width:"200px", height:"200px"}}>

              <img src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?w=1060&t=st=1710262698~exp=1710263298~hmac=00079a63aa7e681f0cf514b757efde89fca04c01c5c160af5551af9a61c6010a" height="100%" width="100%" />
              </Grid>
            <Grid item md={5} lg={5} xs={5} sm={5} xl={5}>
            <Typography
            variant="h6"
            className="paragraph-texts"
            // marginRight={"100px"}
            // marginLeft={"100px"}
            marginTop={"80px"}
            marginBottom={"30px"}
            style={{color:"white"}}

          >
            All the required processes are in-house which helps us manufacture
            products that meet the required level of tight tolerance and the
            highest standards of quality.
          </Typography>
            </Grid> */}
            {/* <Grid item md={5} lg={5} xs={5} sm={5} xl={5}>
            <img src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?w=1060&t=st=1710262698~exp=1710263298~hmac=00079a63aa7e681f0cf514b757efde89fca04c01c5c160af5551af9a61c6010a" height="100%" width="100%" />
            </Grid> */}
            <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>


            <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>

            {/* <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid> */}
            {/* <Grid item md={5} lg={5} xs={5} sm={5} xl={5}> */}
            <Typography
            variant="h6"
            // className="paragraph-texts"
            style={{
              marginTop: "0.5rem",
              marginLeft: "110px",
              marginRight: "100px",
              color:"white",
              marginBottom:'70px'
            }}
          >All the required processes are in-house which helps us manufacture
          products that meet the required level of tight tolerance and the
          highest standards of quality.<br/>
            we use high quality raw material to maintain quality and Industrial
            standards to meet customer requirements. We design and manufacture{" "}
            <b>name plates</b> and <b>labels</b> based on customer requirement
            designs and material at <b>best price and best Quality</b>, and We
            Ensure the <b>double check</b> on each material at the dispatch time
            to meet customer satisfaction in{" "}
            <b>
              360<sup>0</sup> angular
            </b>{" "}
            way.
            <br />
          </Typography>
            {/* </Grid> */}
            
            {/* <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid>
            <Grid item md={5} lg={5} xs={5} sm={5} xl={5}>
            <Typography
            variant="h6"
            className="paragraph-texts"
            style={{
              marginTop: "1.8rem",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            With our original ideas, ground-breaking designing aptitude and
            classy designing course of action, we have been successful in
            offering an exclusive array of Metal Name Plates and Stickers
            materials to our devoted client base. The advanced production unit
            supports us in addressing the pressing and voluminous market
            demands. We are reckoned as much for our design uniqueness as for
            our timely delivery. But the most significant contributory factor
            behind our success is the manpower driving the infrastructure. With
            their innovative ideas, daring to think outside the box and offering
            complete solutions varied signage requirements of clients, the
            untiring efforts have placed us in an enviable position in the
            domain
            <br />
          </Typography>
            </Grid>
            <Grid item md={5} lg={5} xs={5} sm={5} xl={5}></Grid>
            <Grid item md={1} lg={1} xs={1} sm={1} xl={1}></Grid> */}

          </Grid>

         
          
        
        </container>
      </div>
<div style={{fontSize:'4rem', marginLeft:'550px',
fontFamily:'sans-serif',marginTop:'50px'

}}>
 Why we us
 {/* <NotListedLocationIcon/> */}
</div>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item md={4} sm={4} lg={4} xl={4} xs={4}>
         

          <DetailsCard
            backgroundImage={true}
            // src={image2}
            alt="Image 7"
            backgroundColor="pink"
            height={215}
            //   title="Country"
            header="Quality"
            content="We manufacture products that meet the required level of tight tolerance, Corrosion Resistance, Custom shapes, sizes and mounting options, dimensional accuracy, light fastness and the highest standards of quality."
            //   paragraph="paragrapph"
            minWidth="100%"
            maxWidth="100%"
            marginTop="100px"
            borderRadius="10px"
            headerSize="h5"
            headerTextAlign="center"
            fontSize="5px"
            textAlign="center"
            buttonJustifyContent="center"
            buttonName="Explore Now"
            contextColor="white"
            contentAlign="left"
            contentVariant="h7"
          />
        </Grid>
        <Grid item md={4} sm={4} lg={4} xl={4} xs={4}>
        <DetailsCard
            backgroundImage={true}
            // src={image2}
            alt="Image 7"
            backgroundColor="pink"
            height={215}
            //   title="Country"
            header="Experienced Team"
            content="We are in this business and have a gathered an asset of skilled and experienced professionals who can precisely understand customer requirements, provide precise solutions and process them efficiently hence saving our customer’s time

            "
            //   paragraph="paragrapph"
            minWidth="100%"
            maxWidth="100%"
            margin="20px"
            borderRadius="10px"
            headerSize="h5"
            fontSize="5px"
            headerTextAlign="center"
            textAlign="center"
            buttonJustifyContent="center"
            buttonName="Explore Now"
            contextColor="black"
            contentAlign="left"
            contentVariant="h7"
          />
        </Grid>
        <Grid item md={4} sm={4} lg={4} xl={4} xs={4}>
          <DetailsCard
            backgroundImage={true}
            // src={image2}
            alt="Image 7"
            backgroundColor="blue"
            height={215}
            //   title="Country"
            header="Material Options"
            content="  We manufacture Name plates with Aluminium, Brass, Metal, Stainless Steel, Precision lazer and chemical etching and Vinyl, PVC, polycarbonates for Stickers to meet your exact specifications.

            "
            //   paragraph="paragrapph"
            minWidth="100%"
            maxWidth="100%"
            margin="20px"
            borderRadius="10px"
            headerSize="h5"
            headerTextAlign="center"
            fontSize="5px"
            textAlign="center"
            buttonJustifyContent="center"
            buttonName="Explore Now"
            contextColor="white"
            contentAlign="left"
            contentVariant="h7"
          />
          
        </Grid>

       
    <div
        style={ {    
          // background: "linear-gradient(to bottom, #6981a1,#6b74a4,#6981a1,#746e8f,#727ec1,#868e9d,#4c6388,#94bbe9)", // Add your gradient here
          
      marginTop:"3rem",
    }}>
    <div style={{
         marginLeft:"100px",
         marginRight:"600px",
        fontFamily:"sans-serif",
        fontSize:"1rem",
        //  backgroundColor:"lavender"
         
        }}>
        
        <SettingsSuggestOutlinedIcon  style={{ color: '#5cd65c', fontSize:"3rem" , marginTop:"2rem", }} /> 
        We are preferred partners for our customers for their Printing needs.We have the skilled manpower, 
        the latest technology and the desire to match and exceed the quality requirements as well as 
        deadlines of our clients<br/>
      </div>
      <div
      style={{
        marginLeft:"600px",
        marginRight:"100px",
        fontFamily:"sans-serif",
        fontSize:"1rem",
        // backgroundColor:"lavender",
        

        
       }}>
       <FireTruckSharpIcon style={{ color: '#ff704d' , fontSize:"3.5rem",marginTop:"3rem", }} />
       We are tied up with all major logistics support providers / shipping agents who can deliver
        the finished products anywhere in KARNATAKA, at our client’s door.
     </div>
     <div style={{
        fontSize:"1rem",
         marginLeft:"100px",
         marginRight:"600px",
        fontFamily:"sans-serif",
        //  backgroundColor:"lavender"
        }}>
     <ThumbUpAltIcon style={{ color: '#0099cc' , fontSize:"3.5rem"}} />We are a
      complete solution provider for designers and Manufacturing material as customizable to client's, with our skilled and motivated team
        giving their best with cutting edge technology.
        </div>
    </div>
      

        <contact />
        <div
          style={{
            width: "100%",
            height: "5rem",
            textAlign: "center",
            marginTop: "40px",
          }}
        ></div>
       
      </Grid>
    </>
  );
};

export default AboutUS;
