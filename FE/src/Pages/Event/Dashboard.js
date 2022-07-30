import EventCard from "../../Components/Card/EventCard";
import Carousel from "../../Components/Carousel/Carousel";
import style from "./Dashboard.module.scss";
import { MdEmojiEvents } from "react-icons/md";

import img_url from "../../Pictures/landingpage_background.jpg";
import img_url2 from "../../Pictures/landingpage_background2.jpg";
import ButtonMainBlue from "../../Components/Button/ButtonMainBlue";
import { Link } from "react-router-dom";
import EventCardSimple from "../../Components/Card/EventCardSimple";

const Dashboard = (props) => {
  return (
    <div className={style.dashboard_container}>
      <div className={style.carousel_container}>
        <Carousel />
      </div>

      {/* INCOMING */}
      <section className={style.imcoming_section}>
        <div className={style.title}>
          <MdEmojiEvents className={style.icon} />
          <h1>Incoming</h1>
          <MdEmojiEvents className={style.icon} />
        </div>
        <div className={style.hr_container}>
          <div>
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        <div className={style.events_card_container}>
          <EventCard
            img_url={img_url}
            title="Party Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCard
            img_url={img_url2}
            title="Party Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCard
            img_url={img_url}
            title="Party Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCard
            img_url={img_url2}
            title="Party Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
        </div>
        <Link to="/events?item=incoming" className={style.btn_see_more}>
          <hr />
          <ButtonMainBlue text="See more" />
          <hr />
        </Link>
      </section>

      {/* POPULAR */}
      <section className={style.popular_section}>
        <div className={style.title}>
          <MdEmojiEvents className={style.icon} />
          <h1>Popular</h1>
          <MdEmojiEvents className={style.icon} />
        </div>
        <div className={style.hr_container}>
          <div>
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        <div className={style.events_card_container}>
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
          <EventCardSimple
            img_url={img_url2}
            title="Over Night With FPT Students"
            category="Night life"
            date="01/06/2022"
          />
        </div>
        <Link to="/events?item=popular" className={style.btn_see_more}>
          <hr />
          <ButtonMainBlue text="See more" />
          <hr />
        </Link>
      </section>
    </div>
  );
};
export default Dashboard;
