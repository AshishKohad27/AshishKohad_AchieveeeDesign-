import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import style from "../Styles/Footer.module.css";
import footerData from "../Data/Footer.json";

export default function Footer() {
  return (
    <Box
      maxW="1440px"
      h={{ base: "auto", sm: "auto", md: "400px" }}
      bg="#F3F3F3"
      m="auto"
    >
      <SimpleGrid
        maxW="872px"
        m="auto"
        pt="80px"
        columns={{ base: 1, sm: 2, md: 4 }}
        columnGap="40px"
        rowGap="30px"
        className={style.footerContent}
      >
        <Box m="auto">
          <Heading as="h1" w="214px" h="31px">
            Quick Links
          </Heading>
          <Box mt="10px" w="181px" h="164px">
            {footerData &&
              footerData.QuickLinks.map((item, index) => (
                <Box key={index}>{item.subTitle}</Box>
              ))}
          </Box>
        </Box>
        <Box m="auto">
          <Heading as="h1" w="214px" h="31px">
            Policies
          </Heading>
          <Box mt="10px" w="181px" h="164px">
            {footerData &&
              footerData.Policies.map((item, index) => (
                <Box key={index}>{item.subTitle}</Box>
              ))}
          </Box>
        </Box>
        <Box m="auto">
          <Heading as="h1" w="214px" h="31px">
            Company
          </Heading>
          <Box mt="10px" w="181px" h="164px">
            {footerData &&
              footerData.Company.map((item, index) => (
                <Box key={index}>{item.subTitle}</Box>
              ))}
          </Box>
        </Box>
        <Box m="auto">
          <Heading as="h1" w="214px" h="31px">
            Deals
          </Heading>
          <Box mt="10px" w="181px" h="164px">
            {footerData &&
              footerData.Deals.map((item, index) => (
                <Box key={index}>{item.subTitle}</Box>
              ))}
          </Box>
        </Box>
      </SimpleGrid>
      <Box m="auto" mt="28px" className={style.footerBottom}>
        © 2021 Copyright: Bykemania solutions pvt ltd
      </Box>
    </Box>
  );
}
