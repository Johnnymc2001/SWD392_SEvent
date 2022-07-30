import style from "./EventCard.module.scss";
import { AiOutlineTag, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import ButtonTransparent from "../Button/ButtonTransparent";

const EventCard = (props) => {
  return (
    <div className={style.card_container}>
      <div className={style.card_img}>
        <img src={props.img_url} alt="event image" />
        <Link to="id" className={style.detail}>
            <ButtonTransparent 
              text="See more"
            />
        </Link>
      </div>
      <div className={style.card_description}>
        <Link to={"id"} className={style.title}>{props.title}</Link>
        <p className={style.category}>
          <AiOutlineTag className={style.icon} /> {props.category}
        </p>
        <p className={style.date}>
          <AiOutlineClockCircle className={style.icon} /> {props.date}
        </p>
      </div>
    </div>
  );
};
export default EventCard;
