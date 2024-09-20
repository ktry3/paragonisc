// components/OverlayImageCard.tsx

import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface OverlayImageCardProps {
  imageSrc: string;
  title: string;
  flex?: string;
}

const OverlayImageCard: React.FC<OverlayImageCardProps> = ({ imageSrc, title, flex = '1' }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      flex={flex}
    >
      <Image
        src={imageSrc}
        alt={`Image for ${title}`}
        width="100%"
        height="auto"
        objectFit="cover"
        transition="0.3s ease"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        opacity="0"
        transition="opacity 0.3s ease"
        _hover={{ opacity: 1 }}
      >
        <Text fontWeight="bold" color="white" fontSize="xl">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default OverlayImageCard;
