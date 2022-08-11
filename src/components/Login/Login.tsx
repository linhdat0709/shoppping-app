import { StyleLogin } from "./Login.style";
import CloseIcon from "@mui/icons-material/Close";

export const Login = () => {
  return (
    <StyleLogin>
      <div className="login">
        <div className="close">
          <button className="closeBtn">
            <CloseIcon />
          </button>
        </div>
        <div className="title">GUMAX xin chào!!</div>
        <div className="typeLogin">
          <div className="registerBtnContainer">
            <button className="active Btn">Register</button>
          </div>
          <div className="loginBtnContainer">
            <button className="Btn">Login</button>
          </div>
        </div>
        <div className="registerForm">
          <form className="formGroup">
            <div className="title">Please enter registration information</div>
            <div className="userName">
              <label>UserName</label>
              <input className="form-control" />
            </div>
            <div className="password">
              <label>Password</label>
              <input className="form-control" />
            </div>
            <div className="password">
              <label>Re-password</label>
              <input className="form-control" />
            </div>
          </form>
          <div className="submit">
            <button className="submitBtn">Submit</button>
          </div>
        </div>
      </div>
    </StyleLogin>
  );
};
