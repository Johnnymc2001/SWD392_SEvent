import style from "./EventDetail.module.scss";
import img_url from "../../../Pictures/event_detail.png";
import DisplayDateCalendar from "../../../Components/DisplayDateCalendar/DisplayDateCalendar";
import { FaClock } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const detail = () => {
  return (
    <section className={`${style.detail_containter}`}>
      <div className={`${style.detail_imageCover}`}>
        <img src={img_url} alt="Cover_Image" />
      </div>
      <div className={`${style.detail_header}`}>
        <div className={`${style.detail_header_calendar}`}>
          <DisplayDateCalendar />
        </div>
        <div className={`${style.detail_header_information}`}>
          <p className={`${style.detail_header_title}`}>
            [Sheraton Saigon] Dinner at Signature Restaurant (Weekend from
            Friday to Sunday)
          </p>
          <div className={`${style.detail_header_time}`}>
            <FaClock className={`${style.detail_icon}`} />
            <span>
              Thứ 6, 21 Tháng 1 2022 - Thứ 5, 30 Tháng 6 2022 (06:00 PM - 10:00
              PM)
            </span>
          </div>
          <div className={`${style.detail_header_location}`}>
            <HiLocationMarker className={`${style.detail_icon}`} />
            <div>
              <span className={`${style.detail_header_building}`}>
                Signature Restaurant, Level 23 of Sheraton Saigon Hotel & Towers
              </span>
              <span>80 Dong Du , Ben Nghe, Quận 1, Thành Phố Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.detail_content}`}></div>
      <div className={`${style.detail_content}`}></div>
    </section>
  );
};

export default detail;
