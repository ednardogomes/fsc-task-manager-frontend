import CustomButton from "../../components/CustomButton";

import logo from "../images/SidebarLogo.png";
import "./Login.scss";

const login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Full Stack Club Logo" />
      <div className="button-container">
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default login;
