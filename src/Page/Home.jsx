import { Box } from "@chakra-ui/react";
import CustomerFavourites from "../Sections/CustomerFavourites";
import OurKeyMiles from "../Sections/OurKeyMiles";
import TopBikes from "../Sections/TopBikes";
import Navbar from "../Components/Navbar";
import EasyAccess from "../Sections/EasyAccess";
import Footer from "../Components/Footer";
import FrequentlyAsked from "../Sections/FrequentlyAsked";
import RentTopBikes from "../Sections/RentTopBikes";
import WellMaintain from "../Sections/WellMaintain";
import RentVehicles from "../Sections/RentVehicles";

export default function Home() {
  return (
    <Box m="auto">
      <Box maxW="1440px" bg="red.100" h="100px" m="auto">
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}

        {/* Rent Top Bikes */}
        <RentTopBikes />
        {/* Rent Top Bikes */}

        {/* Well Maintain */}
        <WellMaintain />
        {/* Well Maintain */}

        {/* Our Key MilesStones */}
        <OurKeyMiles />
        {/* Our Key MilesStones */}

        {/* Customer Favourites */}
        <CustomerFavourites />
        {/* Customer Favourites */}

        {/* Top Bikes */}
        <TopBikes />
        {/* Top Bikes */}

        {/* Easy Access on the app */}
        <EasyAccess />
        {/* Easy Access on the app */}

        {/* Rent Electric Vehicles */}
        <RentVehicles />
        {/* Rent Electric Vehicles */}

        {/* Frequently Asked Question */}
        <FrequentlyAsked />
        {/* Frequently Asked Question */}

        {/* Fotter */}
        <Footer />
        {/* Fotter */}
      </Box>
    </Box>
  );
}
