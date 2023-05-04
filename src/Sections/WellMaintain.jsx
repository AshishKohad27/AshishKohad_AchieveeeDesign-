import { Box } from "@chakra-ui/react";
import style from "../Styles/WellMaintain.module.css";
import { useRef } from "react";

export default function WellMaintain() {
  const storeId = useRef();
  const handleClick = (val) => {
    console.log("val:", val);
    storeId.current = val;
    console.log(storeId);
  };
  return (
    <Box maxW="1440px" h="505px" bg="red.200" m="auto">
      <Box className={style.carouselContainer}>
        <div className={style.carousel}>
          <div className={style.carousel_1}>
            <div className={style.imageDiv}>1</div>
            <div className={style.contentDiv}>2</div>
          </div>
          <div className={style.carousel_2}>
            <div className={style.imageDiv}>3</div>
            <div className={style.contentDiv}>4</div>
          </div>
          <div className={style.carousel_3}>
            <div className={style.imageDiv}>5</div>
            <div className={style.contentDiv}>6</div>
          </div>
        </div>
      </Box>
      <Box cursor="pointer">
        <Box id="1" onClick={() => handleClick(1)}>
          *
        </Box>
        <Box id="2" onClick={() => handleClick(2)}>
          /
        </Box>
        <Box id="3" onClick={() => handleClick(3)}>
          #
        </Box>
      </Box>
    </Box>
  );
}
