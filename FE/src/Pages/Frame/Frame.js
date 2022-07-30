import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigator/Navbar/Navbar";
import Sidebar from "../../Components/Navigator/Sidebar/Sidebar";

import style from "./Frame.module.scss";

const Frame = (props) => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 1110);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
      <div className={style.frame_container}>
        <Navbar toggleMenu={toggleMenu} />
        <Outlet />
        {/* MASK */}
        <div className={showMenu ? style.mask + " mask_on" : style.mask} onClick={toggleMenu}></div>
      </div>
    </>
  );
};

export default Frame;
