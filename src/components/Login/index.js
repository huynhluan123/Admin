import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Styles from "./Login.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { useEffect, useState } from "react";

const cx = classNames.bind(Styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("https://643013b9b289b1dec4c0c296.mockapi.io/accounts")
      .then((res) => res.json())
      .then((acc) => {
        setAccounts(acc);
      });
  }, []);

  const handleLogin = () => {
    const count = accounts.length;
    console.log("account", accounts);
    let account = {};
    for (let i = 0; i < count; i++) {
      if (email === accounts[i].email && password === accounts[i].password) {
        account = JSON.stringify(accounts[i]);
        localStorage.setItem("login", "true");
        localStorage.setItem("account", account);
        alert("dang nhap thanh cong");

        break;
      }
    }
  };

  return (
    <div className={cx("loginWrapper")}>
      <form className={cx("form")}>
        <div className={cx("box_input")}>
          <div className={cx("icon_login")}>
            <PersonIcon />
          </div>
          <div>
            <input
              value={email}
              type="text"
              className={cx("input_login")}
              placeholder="Tai khoan"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("box_input")}>
          <div className={cx("icon_login")}>
            <LockIcon />
          </div>
          <input
            value={password}
            type="password"
            className={cx("input_login")}
            placeholder="Mat khau"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={cx("btn_login")} onClick={handleLogin}>
          SIGN IN
        </button>

        <div className={cx("linkSignUp")}>
          <p className={cx("p_login")}>Not a member?</p>
          <button
            className={cx("p_signUp")}
            onClick={() => {
              localStorage.setItem("register", "true");
            }}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
