import style from "./Carousel.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import red from "../../Pictures/landingpage_background.jpg";
import purple from "../../Pictures/landingpage_background2.jpg";

const Carousel = (props) => {
  return (
    <div className={style.carousel_container}>
      <Swiper
        pagination={{ dynamicBullets: false, clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiper}
      >
        <SwiperSlide className={style.slide}>
          <img src={red} alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src={purple} alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src={red} alt="" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src={purple} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
