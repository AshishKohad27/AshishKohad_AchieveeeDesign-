import {
  Box,
  Heading,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import style from "../Styles/FrequentlyAsked.module.css";
import FrequentlyAskedData from "../Data/FrequentlyAsked.json";

export default function FrequentlyAsked() {
  return (
    <Box maxW="1440px" h="auto" m="auto" pt="85px" pb="">
      <Box maxW="1118" h="auto" m="auto" pb="91px">
        <Heading as="h1" maxW="476px" h="55px">
          Frequently asked questions
        </Heading>
        <SimpleGrid
          columns={{ base: 1,  md: 2 }}
          gap="10px"
          mt="37px"
          className={style.FQContent}
        >
          {FrequentlyAskedData &&
            FrequentlyAskedData.map((item, index) => (
              <Box key={index}>
                <Accordion allowToggle borderTop="0px solid white">
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {item.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textAlign="left" pb={4}>
                      {item.desc}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            ))}
          <Box></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
