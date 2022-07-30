import style from "./ButtonTransparent.module.scss";

const ButtonTransparent = (props) => {
  return (
    <button
      className={style.btn}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
export default ButtonTransparent;
