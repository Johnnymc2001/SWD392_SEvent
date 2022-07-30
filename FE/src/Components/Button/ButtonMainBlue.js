import style from "./ButtonMainBlue.module.scss";
const ButtonMainBlue = (props) => {
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
export default ButtonMainBlue;
