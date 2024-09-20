import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

interface AccordionProps {
  items: string[];
}

const CustomAccordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <Accordion allowToggle>
      {items.map((item, index) => (
        <AccordionItem key={index} color={"black"} borderColor="blue.500" borderWidth="2px" mb={2}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                {item}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
