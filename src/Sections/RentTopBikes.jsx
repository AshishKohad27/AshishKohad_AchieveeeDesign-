import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import style from "../Styles/RentTopBikes.module.css";
import Form from "../Components/Form";

export default function RentTopBikes() {
  return (
    <Box
      maxW="1440px"
      h={{ base: "auto", sm: "auto", md: "765px", lg: "665px" }}
      m="auto"
      className={style.RentTopBikes}
      pb="25px"
     
    >
      <SimpleGrid
        maxW="1118px"
        h={{ base: "auto", sm: "auto", md: "665px" }}
        m="auto"
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        rowGap="15px"
      >
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          maxW="511px"
          h="auto"
          flexDir="column"
          className={style.RentTopLeft}
          textAlign={{ base: "center", sm: "center", md: "left" }}
          m="auto"
        >
          <Heading as="h1">Rent top bikes for your next ride</Heading>
          <Text mt="10px">
            World-class wealth management using science, data and technology,
            leveraged by our experience, and human touch.
          </Text>
        </Flex>
        <Flex className={style.RentTopRight} m="auto">
          <Form />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
