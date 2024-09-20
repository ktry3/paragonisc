"use client";
import { Grid, GridItem, Box, Text, Image } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import CustomButton from "@/components/custombutton";

const HeroSection = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}  // Responsive layout: 1 column for mobile, 2 for larger screens
      gap={6}
      alignItems="center"
      padding={6}
    >
      <GridItem>
        <Box className={styles.hero}>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Learn today for a better tomorrow
          </Text>
          <CustomButton 
            buttonText="Get in Touch"
            onClick={() => {}}   
            navigateTo="/about"  
          />
        </Box>
      </GridItem>

      {/* Image Section */}
      <GridItem>
        <Image
          src="/assets/school.png"        
          alt="Hero Image"                 
          className={styles.heroImage}
          width="100%"                     
          objectFit="cover"               
        />
      </GridItem>
    </Grid>
  );
};

export default HeroSection;
