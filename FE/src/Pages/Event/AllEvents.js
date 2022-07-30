import EventCard from "../../Components/Card/EventCard";
import style from "./AllEvents.module.scss";
import SearchInput from "../../Components/Input/SearchInput";
import img_url from "../../Pictures/landingpage_background.jpg";
import img_url2 from "../../Pictures/landingpage_background2.jpg";
import Paginate from "../../Components/Paginate/Paginate";

const AllEvents = (props) => {
  return (
    <div className={style.allevents_container}>
      <div className={style.search_container}>
        <SearchInput placeholder="Search" />
      </div>
      <div className={style.filter_container}>

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
      <Paginate
        pageCount={5}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        forcePage={0}
      />
    </div>
  );
};
export default AllEvents;
