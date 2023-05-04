import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import style from "../Styles/TopBikes.module.css";
import TopData from "../Data/TopBikes.json";

export default function TopBikes() {
  return (
    <Box m="auto" maxW="1440px" h="auto" bg="">
      <Grid templateColumns="repeat(2, 1fr)" maxW="1140px" m="auto" h="auto">
        <GridItem
          m="auto"
          w={{ base: "320px", sm: "420px", md: "100%" }}
          colSpan={{ base: 1, sm: 1, md: 1 }}
          className={style.TopBikesLeft}
          textAlign={{ base: "center", sm: "center", md: "left" }}
        >
          <Heading as="h1" mt="22px">
            The Bykemania advantage
          </Heading>
          <Heading as="h1" maxW="476px">
            Top bikes, everytime!
          </Heading>
          <Heading as="h1" maxW="376px" mt="8px">
            Our bikes maintained so well you will feel they are brand new!
          </Heading>

          <SimpleGrid
            gap="24px"
            maxW="400px"
            columns={{ base: 3, sm: 3, md: 3 }}
            mt="35px"
            className={style.TopBikesContent}
          >
            {TopData &&
              TopData.map((item, index) => (
                <Box key={index}>
                  <Box h="50px" m="auto" w="100px" textAlign="center">
                    <Image src={item.image} alt={item.title} />
                  </Box>
                  <Box w="100px" h="41px" mt="10px">
                    <Heading as="h1">{item.title}</Heading>
                  </Box>
                </Box>
              ))}
          </SimpleGrid>
        </GridItem>
        <GridItem
          m="auto"
          colSpan={{ base: 2, sm: 1, md: 1 }}
          mt={{ base: "10px" }}
        >
          <Image src="./Images/TopBikes/TopBikes.png" m="auto" alt="TopBikes" />
        </GridItem>
      </Grid>
    </Box>
  );
}
