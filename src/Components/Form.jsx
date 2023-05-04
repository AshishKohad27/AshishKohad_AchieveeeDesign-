import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import Bikes from "../Data/Form.json";
import style from "../Styles/Form.module.css";

export default function Form() {
  return (
    <Box
      w={{ base: "280px", sm: "431px", md: "431px" }}
      h={{ base: "auto", sm: "auto", md: "503px" }}
      m="auto"
      className={style.form}
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
    </Box>
  );
}
