import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import style from "../Styles/RentVehicles.module.css";
import RentVehicleArr from "../Data/RentVehicles.json";

export default function RentVehicles() {
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    let clearId = setInterval(() => {
      if (RentVehicleArr.length - 1 === currentID) {
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
    <Box maxW="1440px" h="auto" m="auto">
      <SimpleGrid
        maxW="1112px"
        h="auto"
        bg="#3D3D45"
        m="auto"
        borderRadius="20px"
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        columnGap="100px"
      >
        <Box h="320px" pl={{ base: "auto", sm: "auto", md: "65px" }}>
          <Flex mt="35px" gap="6px">
            {RentVehicleArr &&
              RentVehicleArr.map((item, index) => (
                <Box
                  cursor="pointer"
                  h="9px"
                  w="9px"
                  borderRadius="10px"
                  bg={currentID === index ? "#FF7A00" : "#C4C4C4"}
                  onClick={() => handelClick(index)}
                ></Box>
              ))}
          </Flex>
          <Box className={style.RentVehicleLeft} textAlign="left">
            <Heading as="h1" mt="10px">
              {RentVehicleArr && RentVehicleArr[currentID].title}
            </Heading>
            <SimpleGrid
              columns={2}
              mt="5px"
              className={style.RentVehicleLeftContent}
              columnGap="50px"
            >
              {RentVehicleArr &&
                RentVehicleArr[currentID].content.map((item, index) => (
                  <Flex
                    gap="10px"
                    w="250px"
                    bg=""
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Image src={item.image} alt={item.title} />
                    <Heading as="h1">{item.title}</Heading>
                  </Flex>
                ))}
            </SimpleGrid>

            <Button mt="20px" _hover={{}}>
              See all EVs available to rent
            </Button>
          </Box>
        </Box>
        <Box h="320px" maxW="499px" m="auto">
          <Image
            h="100%"
            w="100%"
            borderRadius="20px"
            src={RentVehicleArr && RentVehicleArr[currentID].titleImage}
            alt={RentVehicleArr && RentVehicleArr[currentID].title}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
