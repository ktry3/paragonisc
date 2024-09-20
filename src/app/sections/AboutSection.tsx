"use client";

import { Box, SimpleGrid, Text, Flex, Image } from "@chakra-ui/react";
import ImageCard from "@/components/imageCard";
import OverlayImageCard from "@/components/overlayImageCard";
import CustomAccordion from "@/components/CustomAccordion";

export default function AboutSection() {
  const questions = [
    "What motivates you to work in your current field or profession?",
    "How do you handle stressful situations or tight deadlines?",
    "What are the most important skills needed to succeed in your industry?",
    "Can you describe a time when you had to solve a challenging problem?",
    "How do you stay updated with the latest trends and technologies in your field?",
    "What do you consider your biggest professional achievement so far?",
    "How do you prioritize tasks when managing multiple projects at once?",
    "What is your approach to working within a team environment?",
    "How do you handle constructive criticism from colleagues or supervisors?",
    "Where do you see yourself professionally in the next five years?"
  ];

  return (
    <>
      <Box
        bg="#2C3B90"
        color="white"
        boxShadow="md"
        height={{ base: "150px", md: "250px" }}
        maxWidth="100%"
        mx="auto"
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box width={{ base: "90%", md: "80%" }} textAlign="left">
          <Text fontSize="xl" fontWeight="bold">About Us</Text>
          <Text mt={2} fontSize="md">Your Exploration Goes Here</Text>
        </Box>
      </Box>

      <Box padding="20px" maxWidth="1200px" mx="auto" mt="50px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <ImageCard imageSrc="./assets/kg.jpg" title="Kindergarten" />
          <ImageCard imageSrc="./assets/sc.jpg" title="Primary Campus" />
          <ImageCard imageSrc="./assets/pc.jpg" title="Secondary Campus" />
        </SimpleGrid>
      </Box>

      <Box padding="20px" maxWidth="1200px" mx="auto" mt="50px">
        <Text fontSize="19px">
          Paragon International School, Cambodia (Paragon ISC), formerly known as Zaman International School, was established in 1997. It is governed by the School Board and is one of Cambodia’s premier international schools.
        </Text>
        <Text fontSize="19px" mt="40px">
          The school is certified by the Ministry of Education, Youth and Sports, Cambodia, and by Cambridge Assessment International Education (CAIE), UK. Paragon ISC is a registered center for CAIE examinations as well.
        </Text>
        <Text fontSize="19px" mt="40px">
          Paragon International School, Cambodia, has been awarded accreditation through the prestigious Council of International Schools (CIS).
        </Text>
      </Box>

      <Box height="3px" maxWidth="1200px" bg="gray.300" width="100%" mx="auto" />

      <Box maxWidth="1200px" mx="auto" px={4} py={6}>
        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'start' }} gap={4} mb="20px">
          <Box flex="3">
            <Text fontSize="lg" lineHeight="tall">
              We offer an exclusive blend of national and international curriculum to meet the diverse needs of our student body. The Bilingual program adopts both the Khmer National Curriculum as well as the Cambridge curriculum. The International program adopts the CAIE curriculum which leads our students seamlessly from Primary through Secondary and Pre-University years. The students from the International program benefit from recognized programs such as Cambridge Primary, Cambridge Lower Secondary, Cambridge Upper Secondary (IGCSE) and Cambridge Advanced Levels (AS/A Levels).
              Our curriculum strives to incorporate the experiences, cultures, and perspectives of our students; specifically, an appreciation of Cambodia’s culture and its contribution to the heritage of the civilized world and with a primary focus on internationalism, so as to create open-minded world citizens who have international perspectives, are self-confident and conscientious, and who can function as leaders and team members in societies all over the world.
            </Text>
          </Box>
          <OverlayImageCard imageSrc="./assets/student.jpeg" title="Laboratory Time" flex="2" />
        </Flex>

        <Box height="3px" maxWidth="1200px" bg="gray.300" width="100%" mx="auto" />

        <Flex mt="40px" direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'start' }} gap={4}>
          <OverlayImageCard imageSrc="./assets/student2.jpeg" title="Reading Time" flex="2" />
          <Box flex="3">
            <Text fontSize="lg" lineHeight="tall">
              The teaching and support staff represent more than 9 countries and are dedicated to delivering the highest quality of holistic education to our students.
            </Text>
            <Text fontSize="lg" lineHeight="tall" mt="32px">
              We inspire our students to pursue and achieve their dreams and get admitted to the best universities around the world. The alumni network has been our pride, and we continue to build strong bonds between alumni, students, and parents.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box height="3px" maxWidth="1200px" bg="gray.300" width="100%" mx="auto" />

      <Box
        bg="#2C3B90"
        color="white"
        boxShadow="md"
        height={{ base: "80px", md: "100px" }}
        maxWidth="100%"
        mx="auto"
        mt="40px"
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box width={{ base: "90%", md: "80%" }} textAlign="left">
          <Text fontSize="xl" fontWeight="bold">Diploma Equivalency</Text>
          <Box mt="10px" height="3px" maxWidth="120px" bg="white" width="100%" />
        </Box>
      </Box>

      <Box padding="20px" maxWidth="1200px" mx="auto" mt="40px">
        <Box borderRadius="md" overflow="hidden" boxShadow="lg" maxW="100%" mx="auto">
          <Image
            src="./assets/diploma-equivalency.jpeg"
            alt="Diploma Equivalency"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>
        <Text mt="40px" fontSize="19px">
          Paragon ISC’s High School Diploma for the international programme is recognized by the Ministry of Education, Youth and Sport as equivalent to the national high school diploma.
        </Text>

        <Box mt="20px"></Box>
        <CustomAccordion items={questions} />
      </Box>
    </>
  );
}
