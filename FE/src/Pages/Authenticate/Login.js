import style from "./Login.module.scss";
import imgBackground from "../../Pictures/partying.svg";
import ButtonLoginWithGoogle from "../../Components/Button/ButtonLoginWithGoogle";
import logo from "../../Pictures/logoE.png";
import { signInWithGoogle } from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const onLogin = () => {
    signInWithGoogle(redirectToDashBoard);
  };

  const redirectToDashBoard = () => {
    navigate("/dashboard");
  };

  return (
    <div className={style.login_container}>
      <div className={style.background}>
        <img src={imgBackground} alt="imgbg" />
      </div>

      <div className={style.login_form}>
        <div className={style.logo_container}>
          <img src={logo} alt="logo" />
          <h4>EvSmart</h4>
          <h1>Login</h1>
        </div>
        <ButtonLoginWithGoogle
          onClick={onLogin}
          text="Sign in with google"
        />
      </div>
    </div>
  );
};
export default Login;
