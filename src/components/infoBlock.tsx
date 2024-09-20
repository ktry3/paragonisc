import { Box, Text } from "@chakra-ui/react";

const InfoBlock = ({ title, value }: { title: string; value: string }) => (
    <Box
      bg="white"
      borderRadius="md"
      p={4}
      textAlign="center"
      boxShadow="sm"
    >
      <Text fontSize="sm" fontWeight="bold">{title}</Text>
      <Text>{value}</Text>
    </Box>
  );

export default InfoBlock;
  