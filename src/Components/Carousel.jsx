import { Box } from "@chakra-ui/react";
import style from "../Styles/WellMaintain.module.css";
export default function Carousel() {
  return (
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
  );
}
