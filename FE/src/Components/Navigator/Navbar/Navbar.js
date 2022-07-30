import SearchInputNavbar from "../../Input/SearchInputNavbar";
import style from "./Navbar.module.scss";
import { AiFillBell } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  const toggleSidebar = () => {
    props.toggleMenu();
  };

  return (
    <div className={style.navbar_container}>
      <div className={style.controller}>
        <SearchInputNavbar type="text" placeholder="Search" />
        <GiHamburgerMenu className={style.icon} onClick={toggleSidebar} />
      </div>
      <div className={style.user_area}>
        <div className={style.notify}>
          <AiFillBell className={style.icon} />
        </div>
        <div className={style.user}>
          <img
            src={`https://robohash.org/${Math.floor(Math.random() * 50)}`}
            alt=""
          />
          <p>Username</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
