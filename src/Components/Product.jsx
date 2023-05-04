import { Box, Button, Heading, Image } from "@chakra-ui/react";
import style from "../Styles/CustomerFavourites.module.css";

export default function ({ item }) {
  return (
    <Box maxW="331px" h="auto" bg="" className={style.ProductDiv}>
      <Box maxw="314px" h="208px">
        <Image
          src={item.image}
          alt={item.title}
          w="100%"
          h="100%"
          m="auto"
          mt="24px"
        />
      </Box>
      <Heading as="h1">{item.title}</Heading>
      <Heading as="h2">₹ {item.price} per day</Heading>
      <Button
        mt="14px"
        mb="29px"
        w={{ base: "120px", sm: "120px", md: "149px" }}
        fontSize={{ base: "12px", sm: "12px", md: "14px" }}
        _hover={{
          background: "#00B284",
        }}
      >
        Check Availability
      </Button>
    </Box>
  );
}
