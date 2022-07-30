import { Link } from "react-router-dom";
import style from "./EventCardSimple.module.scss";
const EventCardSimple = (props) => {
  return (
    <Link to="/eventid" className={style.card_container}>
      <div className={style.card_img}>
        <img src={props.img_url} alt="event image" />
      </div>
      <div className={style.description}>
        <h4 className={style.title}>{props.title}</h4>
        <p className={style.date}>{props.date}</p>
        <p className={style.category}>{props.category}</p>
      </div>
    </Link>
  );
};
export default EventCardSimple;
