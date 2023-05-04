import { Box } from "@chakra-ui/react";
import CustomerFavourites from "../Sections/CustomerFavourites";
import OurKeyMiles from "../Sections/OurKeyMiles";

export default function Home() {
  return (
    <>
      <Box maxW="1440px" bg="red.100" h="100px" m="auto">
        {/* Navbar */}
        <Box maxW="1440px" h="97px" bg="blue.200"></Box>
        {/* Navbar */}

        {/* Rent Top Bikes */}
        <Box maxW="1440px" h="665px" bg="purple.200"></Box>
        {/* Rent Top Bikes */}

        {/* Well Maintain */}
        <Box maxW="1440px" h="505px" bg="yellow.200"></Box>
        {/* Well Maintain */}

        {/* Our Key MilesStones */}
        <OurKeyMiles/>
        {/* Our Key MilesStones */}

        {/* Customer Favourites */}
        <CustomerFavourites/>
        {/* Customer Favourites */}

        {/* Top Bikes */}
        <Box maxW="1440px" h="387px" bg="blue.300"></Box>
        {/* Top Bikes */}

        {/* Easy Access on the app */}
        <Box maxW="1440px" h="640px" bg="red.300"></Box>
        {/* Easy Access on the app */}

        {/* Rent Electric Vehicles */}
        <Box maxW="1440px" h="320px" bg="yellow.300"></Box>
        {/* Rent Electric Vehicles */}

        {/* Frequently Asked Question */}
        <Box maxW="1440px" h="498px" bg="gray.300"></Box>
        {/* Frequently Asked Question */}

        {/* Fotter */}
        <Box maxW="1440px" h="400" bg="purple.300"></Box>
        {/* Fotter */}
      </Box>
    </>
  );
}