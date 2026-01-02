
// export default WelcomePage;
import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import Img69 from "../images/img69.jpg";
import AboutUS from "./aboutUS";
import SixthPage from "./landing_page/SixthPage";
import CustomImageCard from "./common/CustomImageCard";
// import Img3 from "./../images/contactImg2.jpeg";
import Img3 from "./../images/img11.jpg";
import welocmePageImg from "./../images/bps3.jpg";
import circleDia from "./../images/CircleDia.jpeg"
import productImg from "./../images/product-list.png";



import { useNavigate } from "react-router";
import '../App.css'
import { SpaceBar } from "@mui/icons-material";
import WhatsAppContact from "./whatsApp";
import LinkedInLink from "./linkedIn";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterContactus from "./FooterContactus";
// import { textAlign } from "@mui/system";'
// --------------------------------------------------------------------------------------
const WelcomePage = () => {

  const navigate=useNavigate();
  return (
    <>
  
      <div
        className="navbar"
        style={{
          backgroundImage: `url(${welocmePageImg})`,
          height: "100vh",
          backgroundSize: "cover",
          // marginTop:"150px",
          
          // backgroundColor:"#462b6e",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          // filter: "blur(1px)" ,
          // backgroundPosition: "center 0.5%  !important",
          opacity:1.5,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", fontSize:"2rem", style:"bold" }}>
          <div className="GSTin">
            <p textAlign="center">GSTin: 22AAAAA0000A1Z5</p>
          </div>
        </div>
        <div className="welcome-page">
          <Container style={{}}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: "aliceblue",
                fontWeight: 100,
                fontStretch: "extra-expanded",
                fontPalette: "fantasy",
                fontFamily: "sans-serif",
                // marginTop: "1.5rem",
                textShadow: "2px 2px 2px black",
                marginBottom: "0px",
                marginTop:"-300px",
                fontSize:"4rem",
              }}
              //font-family: Google Sans, Arial, sans-serif !important;
            >
               {/* Shri Ganapathi Label Tech */}
               Baironics Printing Solutions
            </Typography>

            <div
              style={{

                color: "aliceblue",
                // fontWeight: 10,
                fontFamily: "serif",
                marginTop: '1rem',
                textShadow: "2px 2px 2px black",
                fontSize:"1.5rem"
              }}
            > 
              Registered and Recognised Manufacture in KARNATAKA
              {/* <p textAlign="center" >GSTin: 22AAAAA0000A1Z5 </p> */}
            <pre style={{
                color: "aliceblue",
                // fontWeight: 10,
                fontFamily: "serif",
                // marginTop: '1rem',
                textShadow: "2px 2px 2px black",
                fontSize:"1.3rem"
              }} >
              
            Email: info.baironics@gmail.com      connectOn : 1236547896 

            </pre>
            </div>

            <Typography
              variant="body1"
              paragraph
              sx={{
                color: "aliceblue",
                fontWeight: 600,
                fontFamily: "serif",
                fontSize: "1.4rem",
                marginTop: "7rem",
                boxShadow: "5px solid black",
                textShadow: "1px 2px 2px black",
                marginBottom:"-1rem",
              }}
            >
              Manufacture of All Types of Industrial & Commercial  Name Plates, Stickers,
              <br />
            Anodized Printing &  Etched plate with Lazer marking Services, warning plates using bronze/Brass/steel/Aluminium.<br />
             
              <br />
            </Typography>

          
          </Container>
        </div>
      </div>
      
       {/* <h1 style={{textAlign:'center'}}>SGLT</h1> */}

       <SixthPage />
       <div style={{width:'100%', height: '5rem',textAlign:'center', marginTop:'00px',}}>

<Button variant="contained" color="primary" style={{width:'50%',
fontFamily:'sans-serif',
 height: '6rem',textAlign:'center',backgroundColor:'orange',
color:'white',fontSize:'1.5rem'}} onClick={()=>{
  navigate("/service")
}} >

{/* <div
        className="navbar"
        style={{
          backgroundImage: `url(${productImg})`,
          height: "100vh",
          backgroundSize: "cover",
          // marginTop:"150px",
          
          // backgroundColor:"#462b6e",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          // filter: "blur(1px)" ,
          // backgroundPosition: "center 0.5%  !important",
          // opacity:1.5,
        }}
      ></div> */}

Click Here to Explore Our Products 

</Button>
  </div>
    
{/* <div
        className="navbar"
        style={{
          // backgroundImage: `url(${productImg})`,
          // height: "160vh",
          // // backgroundSize: "cover",
          // marginTop:"50px",
          // marginBottom:"10px",
          
          // // backgroundColor:"#462b6e",
          // backgroundRepeat: "no-repeat",
          // // backgroundAttachment: "fixed",
          // // filter: "blur(1px)" ,
          // backgroundPosition: "center 0.5%  !important",
          // // opacity:1.5,
          backgroundImage: `url(${productImg})`,
    height: "190vh",
    marginTop: "50px",
    marginBottom: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 0.5%",
    backgroundSize: "contain",  // This scales the image to fit within the div
        }}
      ></div> */}
<div

style={{
  color : "black",
  fontFamily: "serif",
  marginTop: '3rem',
  fontWeight: "bold",
  fontSize: "3rem",
  marginLeft:"3rem"
}}>
  Name Plate & Sticker Manufacture
</div>
       <pre >
       <div
              style={{

                color: "black",
                // fontWeight: 10,
                fontFamily: "serif",
                marginTop: '1rem',
                // textShadow: "2px 2px 2px black",
                fontSize:"1.3rem",
                marginLeft:"150px",
                marginRight:"100px",
              }}
            > 
           Baironics Printing Solutions in Karnataka established year 2025. 
            Are distinguished name plate manufacturer <br />offering an enormous consignment of Name Plate, 
            Name Plate Labels, stainless steel name plate, metal name plate <br />
            in Bangalore.  

            We develop name plate in according to requirement and best designs 
            as possible. <br />
            <br />
            BPS provide name plates like <b>Etched Name Plate, 
            Aluminium logo name plate,  Laser Marking Name Plate,<br />
            Electrical Motor Name Plate, vinyle Stickers and polycarbonate Stickers</b>.
             We offer product customization by <br />offering
             various options in materials, 
            
            processes, finishes, attachment methods and adhesives.<br />
            <br />
            We design all types of  Plate with high quality raw material and latest techniques with best 
            finish to meet various<br />demand of client. These name plates are available in different
             customisation option for our valuable customer.<br />

             customisation levels includes Thickness, material,
             shape, process, color etc. 
            </div>
       </pre>

     <AboutUS />

   
      

      
<div
 className="navbar"
 style={{
   backgroundImage: `url(${Img3})`,
   height: "70vh",
   backgroundSize: "cover",
   // marginTop:"150px",
   backgroundColor:"#f79d28",
   backgroundRepeat: "no-repeat",
   // backgroundAttachment: "fixed",
   // filter: "blur(2px)" ,
   // backgroundPosition: "center 0.5%  !important",
   opacity: 0.9,
   marginTop:'-50px'
 }}
>
<div style={{width:'100%', height: '5rem',textAlign:'center', marginTop:'00px',}}>

<Button variant="contained" color="primary" style={{width:'50%',
fontFamily:'sans-serif',
 height: '6rem',textAlign:'center',backgroundColor:'orange',
color:'white',fontSize:'1.5rem'}} onClick={()=>{
  navigate("/service")
}} >

Click Here to Explore Our Products 

</Button>
  </div>
  <div  style={{
          backgroundImage: `url(${circleDia})`,
        }}>
        {/* //for Circle diagram */}
       
      </div>
<div style={{width:'100%', marginLeft:'10px', marginTop:'20px',
textAlign:'center',fontSize:'4.5rem',height:'4rem' }}>
  <Button variant="contained" color="primary" onClick={()=>{
  navigate("/contact")
}} >


Click Here to Contact Us 
</Button>
{/* <space>
<AddIcCallIcon/></space> */}

</div>
<div style={{width:'100%', marginLeft:'10px', marginTop:'40px',
 textAlign:'center',fontSize:'1.5rem',}}>
<WhatsAppContact />

{/* <LinkedInLink /><LinkedInIcon/> */}
</div>
</div>
{/* <a href="/service"> */}


          {/* </a> */}

      {/* <Container>
      <div className="homePageImages">
          <Typography>

            
            home page dynamic images are here 
          </Typography>
        </div>
        
        <div className="Infrastructure">
          
      <Typography>
        <h2>
          Infrastructure
        </h2>
      We have a well-equipped infrastructure with all the processes done in-house right from Designing, Manufacturing to Packaging your labels / Name Plates.
      </Typography>
        </div>
        <div className="quality">
          <Typography>
            <h2>
              Quality
            </h2>
          We manufacture products that meet the required level of tight tolerance, dimensional accuracy, light fastness and the highest standards of quality.
          </Typography>
        </div>
        <div className="Material Options">
          <Typography>
            <h2>
              Material Options
            </h2>
          We work with a wide variety of options for materials, processes, thickness, attachment method& adhesives to meet your exact specifications. We manufacture Name plates & Stickersusing high quality material such as Aluminium Anodized, Stainless Steel.
          </Typography>
          <div className="MainProducts">
            <Typography>

        <button>Click Here to Explore Our Products</button>
              <h2>
                Main Products
              </h2>
              <pre>
                here are constant images of main products.
              </pre>
            </Typography>
            

          </div>
        </div>
      </Container>
        */}
       
    
    </>
  );
};

export default WelcomePage;
