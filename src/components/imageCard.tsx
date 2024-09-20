// components/ImageCard.tsx

import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface ImageCardProps {
  imageSrc: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title }) => {
  return (
    <Box>
      <Box
        bg="gray.200"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
      >
        <Image
          src={imageSrc}
          alt={`Image for ${title}`}
          width="100%"
          height="auto"
          objectFit="cover"
        />
      </Box>
      <Box textAlign="center" mt={2} color="#2C3B90" fontSize="20px">
        <Text fontWeight="bold">{title}</Text>
      </Box>
    </Box>
  );
};

export default ImageCard;
