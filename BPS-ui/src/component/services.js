
import React from "react";
import { Container, Typography, Button } from "@mui/material";
import CustomGrid from "./common/CustomGrid";
import CustomSizeCard from "./common/CustomSizeCard";
import CustomCard from "./common/CustomCard";
// import image2 from'../images/image7.jpeg';
import image7 from'../images/BC-prod-1.png';
// import img5 from '../images/sglImg5.jpg';

// ------------------------------------------------------------------------------------------------
const Services = () => {
  return (
    <>
      <div 
      className="services navbar"
      >
     
          <CustomGrid
       height="60vh"
        >
          
           <CustomCard
          backgroundImage={true}
          src={image7}
          height={400}
            //  backgroundColor="black"
            //   title="Country"
            header="Types of Plates"
            content="Aluminium Name Plate, Electro Motor Name Plate, 
            SS 316/SS 304 lazer marking Plate,Steel Barcode Labels, Etched Plate
            , Number , Instuction, Metal Barcode,"

            //   paragraph="paragrapph"
            minWidth="100%"
            maxWidth="100%"
            margin="20px"
            borderRadius="10px"
            headerSize="h2"
            headerTextAlign="center"
            textAlign="center"
            buttonJustifyContent="center"
            buttonName="Explore Now"
            contentAlign="left"
            

            contentVariant="h5"
            dataStyles={{
              top:'0%',
              left: '50%',
              
            }}
            exploreClickLink='productspage2'

          />
          </CustomGrid>
          <CustomGrid
       height="50vh"
        >
          <CustomCard
          height={900}
          backgroundImage={true}
          src={image7}
          alt="Image 7"
            // backgroundColor="orange"
            //   title="Country"
            header="Stickers & Labels"
            content="Ploy Carbonate Stickers, Vinyl Stickers, Digital Stickers"
            //   paragraph="paragrapph"
            minWidth="100%"
            maxWidth="100%"
            margin="20px"
            borderRadius="10px"
            headerSize="h2"
            headerTextAlign="center"
            textAlign="center"
            buttonJustifyContent="center"
            buttonName="Explore Now"
            contentAlign="right"
            headerColor="Black"
            contentColor="Black"

            contentVariant="h5"
            // contextColor="white"

            dataStyles={{
              top:'60%',
              left: '5%',
              
              

            }}
            exploreClickLink='productspage3'

          /> 
        </CustomGrid>
      </div>
    </>
  );
};

export default Services;

const extraCode = () => {
  <Container>
    <Typography varient="h3>" style={{}}>
      Lazer Solutions
      <button>Explore now</button>
      Description about lazer solutions
    </Typography>

    <Typography varient="h3>" style={{}}>
      All Types of Plates
      <button>Explore now</button>
      Description about plates
    </Typography>

    <Typography varient="h3>" style={{}}>
      Stickers & Labels
      <button>Explore now</button>
      Description about Stickers and Labels
    </Typography>
  </Container>;
};
