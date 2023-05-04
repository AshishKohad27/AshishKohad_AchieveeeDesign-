import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import style from "../Styles/EasyAccess.module.css";
export default function EasyAccess() {
  return (
    <Box
      maxW="1440px"
      h={{ base: "auto", sm: "auto", md: "640px" }}
      m="auto"
      pt="44px"
    >
      <SimpleGrid
        maxW="1112px"
        h={{ base: "auto", sm: "auto", md: "640px" }}
        m="auto"
        columns={{ base: 1, sm: 1, md: 2 }}
        gap="10px"
      >
        <Flex
          w={{ base: "300px", sm: "", md: "556px" }}
          h="auto"
          m={{ base: "auto" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: "80px", sm: "80px" }}
        >
          <Box w="505px">
            <Box borderRadius="22px" className={style.EasyLeft} m="">
              <Box maxW="331px" h="auto">
                <Image
                  borderBottomLeftRadius="22px"
                  src="./Images/EasyAccess/EasyBG.png"
                />
                <Image src="./Images/EasyAccess/EasyBG1.png" />
              </Box>
              <Box w="179px" h="44px" className={style.popUp}>
                ⚡ Instant booking
              </Box>
              <Box w="188px" h="44px" className={style.popUp}>
                🔔 Promotion alerts
              </Box>
              <Box w="179px" h="44px" className={style.popUp}>
                🏍️ New model alerts
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          maxW="556px"
          h="100%"
          className={style.EasyContent}
        >
          <Text maxW="214px" h="31px">
            Download Bykemania
          </Text>
          <Heading as="h1" maxW="476px" h="auto" textAlign="left">
            Easy access on the app
          </Heading>
          <Heading as="h1" maxW="406px" h="72px" mt="8px">
            Install our mobile app to get exciting offers and amazing features.
          </Heading>
          <Flex mt="12.43px">
            <Box maxW="164px" h="49px">
              <Image src="./Images/EasyAccess/googleStore.png" />
            </Box>
            <Box maxW="164px" h="49px">
              <Image src="./Images/EasyAccess/appleStore.png" />
            </Box>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
