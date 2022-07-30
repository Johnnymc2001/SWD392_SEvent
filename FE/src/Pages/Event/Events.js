import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AllEvents from "./AllEvents";
import FollowedEvents from "./FollowedEvents";

const Events = (props) => {
  let [item, setItem] = useSearchParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!item.get("item")) {
      navigate("/events");
    }
  }, []);

  return (
    <>
      {!item.get("item") && <AllEvents />}
      {item.get("item") === "followed" && <FollowedEvents />}
    </>
  );
};
export default Events;
