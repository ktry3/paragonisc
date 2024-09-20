"use client";

import React, { useState } from "react";
import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import FormField from "@/components/formfield";
import CustomButton from "@/components/custombutton";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box maxW="1200px" mx="auto" p={6}>
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Contact Us
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mt={{ base: "0px", md: "100px" }}>
    
        <Image 
          src="/assets/contact.png" 
          alt="Contact Us"
        />

        <Box>
        <Text mt={4} fontSize="lg" textAlign="center" mb="20px">
            We&apos;re here to help! Send us a message, and we&apos;ll get back to you as soon as possible.
        </Text>
        <Box
          as="form"
          onSubmit={handleSubmit}
          p={6}
          boxShadow="md"
          bg="white"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
        >
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            isTextArea
          />

        <Box mt={4} display="flex" justifyContent="flex-end">
            <CustomButton
              buttonText="Submit"
              onClick={(e) => handleSubmit(e)}
            />
        </Box>
        </Box>
        </Box>
        
      </SimpleGrid>
    </Box>
  );
};

export default ContactSection;
