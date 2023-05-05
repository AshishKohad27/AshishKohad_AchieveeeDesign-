import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import style from "../Styles/WellMaintain.module.css";
import { useEffect, useState } from "react";
import WellMainArr from "../Data/WellMaintain.json";

export default function WellMaintain() {
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    let clearId = setInterval(() => {
      if (WellMainArr.length - 1 === currentID) {
        setCurrentID(0);
      } else {
        setCurrentID(currentID + 1);
      }
    }, 3000);

    return () => clearInterval(clearId);
  }, [currentID]);

  const handelClick = (val) => {
    setCurrentID(val);
  };

  return (
    <Box
      maxW="1440px"
      h={{ base: "auto", lg: "505px" }}
      m="auto"
      pt="100px"
      pb="50px"
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        maxW="1154px"
        h={{ base: "auto", lg: "290px" }}
        m="auto"
        columnGap="100px"
      >
        <Box
          w={{ base: "320px", sm: "480px", md: "580px" }}
          h="290px"
          className={style.wellMainLeft}
          m="auto"
        >
          <Box
            w={{ base: "280px", sm: "320px", md: "374px" }}
            h="223px"
            bg="#FFEBDF"
            borderRadius="20px"
            position="absolute"
            top="0px"
            right={{ base: "10px", sm: "30px", md: "73px" }}
          ></Box>
          <Box
            w={{ base: "280px", sm: "320px", md: "423px" }}
            h="233px"
            backgroundImage={`url(${WellMainArr[currentID].image})`}
            backgroundSize="cover"
            backgroundPosition="center center"
          ></Box>
          <Box
            className={style.display_1}
            position="absolute"
            top={{ md: "18px" }}
            left={{ md: "44px" }}
          >
            {WellMainArr[currentID].display[0]}
          </Box>
          <Box
            className={style.display_2}
            position="absolute"
            top={{ base: "100px", md: "49px" }}
            right="0px"
          >
            {WellMainArr[currentID].display[1]}
          </Box>
        </Box>

        <Box
          textAlign={{ base: "center", md: "left" }}
          w={{ base: "320px", sm: "480px", md: "580px" }}
          h={{ base: "auto", lg: "290px" }}
          m="auto"
        >
          <Flex gap="10px" pt="20px">
            {WellMainArr &&
              WellMainArr.map((item, index) => (
                <Box
                  key={index}
                  cursor="pointer"
                  h="10px"
                  w="10px"
                  bg={currentID === index ? "#5C2C01" : "#C4C4C4"}
                  borderRadius="10px"
                  onClick={() => handelClick(index)}
                ></Box>
              ))}
          </Flex>
          <Box className={style.wellMainRight}>
            <Text mt="22px">{WellMainArr[currentID].subTitle}</Text>
            <Heading as="h1">{WellMainArr[currentID].title}</Heading>
            <Text mt="8px">{WellMainArr[currentID].desc}</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
