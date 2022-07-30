import style from "./ButtonLoginWithGoogle.module.scss";
import { GrGooglePlus } from "react-icons/gr";

const ButtonLoginWithGoogle = (props) => {
  return (
    <button
      className={style.btn}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <GrGooglePlus className={style.icon}/>
      {props.text}
    </button>
  );
};
export default ButtonLoginWithGoogle;
