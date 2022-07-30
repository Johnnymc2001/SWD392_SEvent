import style from "./Sidebar.module.scss";
import logo from "../../../Pictures/logoE.png";
import { GiHamburgerMenu, GiFireworkRocket } from "react-icons/gi";
import { BsTextIndentLeft } from "react-icons/bs";
import { NavLink, Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

const Sidebar = (props) => {
  const [dropDown, setDropDown] = useState({
    dashboard: false,
    events: false,
    category: false,
  });

  let location = useLocation();
  const [params, setParams] = useSearchParams();

  const toggle = () => {
    props.toggleMenu();
    setDropDown(() => {
      return {
        dashboard: false,
        events: false,
        category: false,
      };
    });
  };

  const toggleDropDownDashboard = () => {
    setDropDown(() => {
      return {
        dashboard: !dropDown.dashboard,
        events: false,
        category: false,
      };
    });
  };

  const toggleDropDownEvents = () => {
    setDropDown(() => {
      return {
        dashboard: false,
        events: !dropDown.events,
        category: false,
      };
    });
  };

  const toggleDropDownCategory = () => {
    setDropDown(() => {
      return {
        category: !dropDown.category,
        events: false,
        dashboard: false,
      };
    });
  };

  return (
    <div
      className={
        props.showMenu
          ? style.sidebar_container
          : style.sidebar_container + " hidden"
      }
    >
      {/* SIDE BAR HEADER */}
      <div className={style.header}>
        <NavLink to={"/dashboard"}>
          <div className={style.brand}>
            <img src={logo} alt="brand" />
            <h2>EvSmart</h2>
          </div>
        </NavLink>
        <div className={style.toggle} onClick={toggle}>
          {props.showMenu ? (
            <GiHamburgerMenu className={style.toggle_button} />
          ) : (
            <BsTextIndentLeft className={style.toggle_button} />
          )}
        </div>
      </div>

      {/* SIDEBAR BODY */}
      <div className={props.showMenu ? style.body : style.body + " hidden"}>
        {/* DASHBOARD */}
        <Link to={"/dashboard"} className={style.submenu} onClick={toggleDropDownDashboard}>
          <div
            className={
              location.pathname.includes("/dashboard")
                ? style.row + " active"
                : style.row
            }
          >
            {props.showMenu ? (
              <div className={style.title}>
                <p>
                  <FaHome className={style.icon} /> Dashboard
                </p>
              </div>
            ) : (
              <div className={style.title} onClick={toggle}>
                <FaHome className={style.icon} />
              </div>
            )}
          </div>
        </Link>
        {/* EVENTS */}
        <div className={style.submenu}>
          <div
            className={
              location.pathname.includes("/events")
                ? style.row + " active"
                : style.row
            }
            onClick={toggleDropDownEvents}
          >
            {props.showMenu ? (
              <>
                <div className={style.title}>
                  <p>
                    <GiFireworkRocket className={style.icon} /> Events
                  </p>
                </div>
                <div className={style.toggle}>
                  {dropDown.events ? (
                    <BsChevronDown className={style.toggle_button} />
                  ) : (
                    <BsChevronRight className={style.toggle_button} />
                  )}
                </div>
              </>
            ) : (
              <div className={style.title} onClick={toggle}>
                <GiFireworkRocket className={style.icon} />
              </div>
            )}
          </div>
          <div className={dropDown.events ? style.item + " show" : style.item}>
            <Link
              className={
                location.pathname === "/events" &&
                !params.get("item") &&
                "active"
              }
              to={"/events"}
            >
              All events
            </Link>
            <Link
              className={
                location.pathname === "/events" &&
                params.get("item") === "followed" &&
                "active"
              }
              to={"/events?item=followed"}
            >
              Followed events
            </Link>
            <Link
              className={
                location.pathname === "/events" &&
                params.get("item") === "popular" &&
                "active"
              }
              to={"/events?item=popular"}
            >
              Popular events
            </Link>
            <Link
              className={
                location.pathname === "/events" &&
                params.get("item") === "incoming" &&
                "active"
              }
              to={"/events?item=incoming"}
            >
              Incoming event
            </Link>
          </div>
        </div>

        {/* CATGORY */}
        <div className={style.submenu}>
          <div
            className={
              location.pathname.includes("/category")
                ? style.row + " active"
                : style.row
            }
            onClick={toggleDropDownCategory}
          >
            {props.showMenu ? (
              <>
                <div className={style.title}>
                  <p>
                    <BiCategory className={style.icon} /> Category
                  </p>
                </div>
                <div className={style.toggle}>
                  {dropDown.category ? (
                    <BsChevronDown className={style.toggle_button} />
                  ) : (
                    <BsChevronRight className={style.toggle_button} />
                  )}
                </div>
              </>
            ) : (
              <div className={style.title} onClick={toggle}>
                <BiCategory className={style.icon} />
              </div>
            )}
          </div>
          <div
            className={dropDown.category ? style.item + " show" : style.item}
          >
            <Link to={"/allevents"}>Category 1</Link>
            <Link to={"/followedevents"}>Category 1</Link>
            <Link to={"/popularevents"}>Category 1</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
