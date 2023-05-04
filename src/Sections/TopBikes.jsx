import { Box, Grid, Image } from "@chakra-ui/react";

export default function TopBikes() {
  return (
    <Box m="auto" maxW="1440px" h="387px" bg="blue">
      <Grid
        templateColumns="repeat(2,1fr)"
        maxW="1140px"
        bg="yellow"
        m="auto"
        h="387px"
      >
        <Box bg="gray">1</Box>
        <Box bg="red" m="auto">
          <Image src="./Images/TopBikes/TopBikes.png" m="auto" alt="TopBikes" />
        </Box>
      </Grid>
    </Box>
  );
}
