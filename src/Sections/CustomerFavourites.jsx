import { Box, Heading, Select, SimpleGrid, Text } from "@chakra-ui/react";
import vehicles from "../Data/CustomerFavourite.json";
import style from "../Styles/CustomerFavourites.module.css";
import Product from "../Components/Product";

export default function CustomerFavourites() {
  return (
    <Box maxW="1440px" h={{ base: "auto", md: "1109px" }} m="auto">
      <Box className={style.HeadingCustomerFav} pt="59px">
        <Heading as="h1" h={{ base: "auto", md: "55px" }}>
          Customer favorites
        </Heading>
        <Text h={{ base: "auto", md: "36px" }}>
          Bikes that are trending this month ️‍🔥
        </Text>

        <Box
          className={style.filter}
          position="absolute"
          top={{ base: "", md: "72px" }}
          right={{ base: "35%", sm: "40%", md: "149px" }}
        >
          <Select fontSize="14px">
            <option value="">Filter by</option>
            <option value="">Bikes</option>
            <option value="">Scooter</option>
          </Select>
        </Box>
      </Box>
      <SimpleGrid
        maxW="1140px"
        m="auto"
        mt="59px"
        columns={{ base: 1, sm: 2, md: 3 }}
        rowGap="38px"
        columnGap="71px"
      >
        {vehicles &&
          vehicles.map((item, index) => <Product key={index} item={item} />)}
      </SimpleGrid>
    </Box>
  );
}
