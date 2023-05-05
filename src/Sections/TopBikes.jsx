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
    <Box m="auto" mt={{ base: "30px" }} maxW="1440px" h="auto" bg="">
      <Grid
        templateColumns="repeat(2, 1fr)"
        maxW="1140px"
        m="auto"
        h="auto"
        display={{ base: "flex", sm: "flex", md: "grid" }}
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <GridItem
          w={{ base: "300px", sm: "320px", md: "" }}
          colSpan={1}
          className={style.TopBikesLeft}
          textAlign={{ base: "center", sm: "center", md: "left" }}
          m="auto"
        >
          <Heading as="h1" mt="22px">
            The Bykemania advantage
          </Heading>
          <Heading as="h1" w={{ base: "auto", sm: "auto", md: "400px" }}>
            Top bikes, everytime!
          </Heading>
          <Heading as="h1" maxW="376px" mt="6px">
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
          mt={{ base: "30px" }}
        >
          <Image
            w="98%"
            src="./Images/TopBikes/TopBikes.png"
            m="auto"
            alt="TopBikes"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
