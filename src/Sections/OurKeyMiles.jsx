import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import style from "../Styles/OurKeyMiles.module.css";
import MileStone from "../Data/OurKeyMiles.json";

export default function OurKeyMiles() {
  return (
    <Box
      maxW="1440px"
      h={{ base: "auto", md: "331px" }}
      m="auto"
      className={style.OurKeyMiles}
    >
      <Box maxW="1140px" m="auto" className={style.OurKeyHeading}>
        <Heading as="h1" pt="62px" textAlign={{ base: "center", md: "left" }}>
          Our Key Milestone
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 5 }}
          className={style.milesContent}
          gap="0px"
          textAlign={{ base: "", md: "left" }}
          mt="34px"
        >
          {MileStone &&
            MileStone.map((item, index) => (
              <Box key={index}>
                <Heading as="h1">
                  {item.digit}
                  <span>+</span>
                </Heading>
                <Text>{item.title}</Text>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
