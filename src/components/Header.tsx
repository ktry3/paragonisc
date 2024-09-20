"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Image, Flex, Link as ChakraLink, IconButton, Collapse, VStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Head from 'next/head';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <Head>
        <title>Your Website Title</title>
        <link rel="icon" href="/assets/favicon.png" />
    </Head>
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      bg="white"
      boxShadow="md"
      zIndex="1000"
      p="10px 20px"
    >
      <Flex justify="space-between" align="center">
        <ChakraLink as={NextLink} href="/">
          <Image src="/assets/logo.png" alt="School Logo" h="60px" />
        </ChakraLink>

        {/* Navigation for larger screens */}
        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <ChakraLink as={NextLink} href="/" fontWeight="bold" mr="20px" _hover={{ color: '#0070f3', transform: 'translateY(-2px)' }}>
            Home
          </ChakraLink>
          <ChakraLink as={NextLink} href="/about" fontWeight="bold" mr="20px" _hover={{ color: '#0070f3', transform: 'translateY(-2px)' }}>
            About
          </ChakraLink>
          <ChakraLink as={NextLink} href="/contact" fontWeight="bold" mr="20px" _hover={{ color: '#0070f3', transform: 'translateY(-2px)' }}>
            Contact
          </ChakraLink>
          <ChakraLink as={NextLink} href="/weather" fontWeight="bold" _hover={{ color: '#0070f3', transform: 'translateY(-2px)' }}>
            Weather Now
          </ChakraLink>
        </Flex>

        {/* Hamburger Menu for smaller screens */}
        <Box display={{ base: 'block', md: 'none' }} ref={menuRef}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="outline"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
          />
          <Collapse in={isOpen}>
            <Box
              position="absolute"
              top="100%"
              left="0"
              w="100%"
              bg="white"
              boxShadow="md"
              p={4}
              zIndex="999"
            >
              <VStack spacing={4} align="start">
                <ChakraLink as={NextLink} href="/" fontWeight="bold" onClick={closeMenu}>
                  Home
                </ChakraLink>
                <ChakraLink as={NextLink} href="/about" fontWeight="bold" onClick={closeMenu}>
                  About
                </ChakraLink>
                <ChakraLink as={NextLink} href="/contact" fontWeight="bold" onClick={closeMenu}>
                  Contact
                </ChakraLink>
                <ChakraLink as={NextLink} href="/weather" fontWeight="bold" onClick={closeMenu}>
                  Weather Now
                </ChakraLink>
              </VStack>
            </Box>
          </Collapse>
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default Header;
