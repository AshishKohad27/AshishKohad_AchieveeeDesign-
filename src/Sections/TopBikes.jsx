import { Box, Grid } from "@chakra-ui/react";

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
        <Box bg="red">
          <Image src="./Images/" alt="" />
        </Box>
      </Grid>
    </Box>
  );
}
