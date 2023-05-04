import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import Bikes from "../Data/Form.json";
import style from "../Styles/Form.module.css";

export default function Form() {
  return (
    <Box
      w={{ base: "310px", sm: "431px", md: "431px" }}
      h={{ base: "auto", sm: "auto", md: "503px" }}
      m="auto"
      className={style.form}
      p={{ base: "10px", sm: "10px", md: "0px" }}
      boxSize="fit-content"
    >
      <Box w="100%" h="115px" className={style.Container}>
        <Grid
          maxW="337px"
          h="117px"
          templateColumns="repeat(3,1fr)"
          m="auto"
          gap="1px"
        >
          {Bikes &&
            Bikes.map((item, index) => (
              <Box key={index} mt="30px" className={style.SvgContain}>
                <Box>
                  <Image src={item.Svg} alt={item.title} />
                </Box>
                <Box w="75px" h="39px" mt="10px">
                  <Heading as="h1">{item.title}</Heading>
                </Box>
              </Box>
            ))}
        </Grid>
      </Box>

      <Box className={style.formInput}>
        <Box mt="37px">
          <Heading as="h1" maxW="342px" m="auto">
            Location
          </Heading>
          <Flex maxW="342px" h="40px" m="auto" mt="9px">
            <Input placeholder="Select City" />
            <Input placeholder="Select Location" />
          </Flex>
        </Box>

        <Box mt="26px">
          <Heading as="h1" maxW="342px" m="auto">
            Pickup
          </Heading>
          <Flex maxW="342px" h="40px" m="auto" mt="9px">
            <Input placeholder="Select Date" />
            <Input placeholder="Select Time" />
          </Flex>
        </Box>

        <Box mt="28px">
          <Heading as="h1" maxW="342px" m="auto">
            Drop
          </Heading>
          <Flex maxW="342px" h="40px" m="auto" mt="9px">
            <Input placeholder="Select Date" />
            <Input placeholder="Select Time" />
          </Flex>
        </Box>

        <Box m="auto" mt="23px" maxW="342px">
          <Button
            w="100%"
            h="40px"
            bg="#FF7A00"
            color="#ffffff"
            m="auto"
            _hover={{
              color: "#000000",
            }}
          >
            Search your ride
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
