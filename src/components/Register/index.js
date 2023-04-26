import classNames from "classnames/bind";
import Styles from "./Login.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import DnsIcon from "@material-ui/icons/Dns";
import LockIcon from "@material-ui/icons/Lock";
import ImageIcon from "@material-ui/icons/Image";
import { useEffect, useState } from "react";

import axios from "axios";

const cx = classNames.bind(Styles);

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");

  const [accounts, setAccounts] = useState([]);

  const { onRegister } = props;

  useEffect(() => {
    fetch("https://643013b9b289b1dec4c0c296.mockapi.io/accounts")
      .then((res) => res.json())
      .then((acc) => {
        setAccounts(acc);
      });
  }, []);

  const handleRegister = () => {
    const count = accounts.length;
    console.log("account", accounts);
    let isCheck = true;
    for (let i = 0; i < count; i++) {
      if (email === accounts[i].email) {
        alert("Tên tài khoản đã tồn tại vui lòng thử với tên tài khoản khác");
        isCheck = false;
        break;
      }
    }
    if (isCheck === false) {
      console.log("dang ky that bai");
    } else {
      axios
        .post("https://643013b9b289b1dec4c0c296.mockapi.io/accounts", {
          name: fullName,
          email: email,
          avatar: avatar,
          password: password,
        })
        .then((response) => {
          // Nếu yêu cầu thành công, hiển thị dữ liệu trả về lên trang web
          console.log(fullName, email, avatar, password);
          console.log(response.data);
        })
        .catch((error) => {
          // Nếu yêu cầu thất bại, hiển thị thông báo lỗi
          console.error(error);
        });
      alert("dang ky thanh cong");
    }
  };

  return (
    <div className={cx("loginWrapper")}>
      <form className={cx("form")}>
        <div className={cx("box_input")}>
          <div className={cx("icon_login")}>
            <DnsIcon />
          </div>
          <div>
            <input
              value={fullName}
              type="text"
              className={cx("input_login")}
              placeholder="Họ và tên"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
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
        <div className={cx("box_input")}>
          <div className={cx("icon_login")}>
            <ImageIcon />
          </div>
          <div>
            <input
              value={avatar}
              type="text"
              className={cx("input_login")}
              placeholder="Them Link anh dai dien"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>

        <button className={cx("btn_login")} onClick={handleRegister}>
          SIGN UP
        </button>

        <div className={cx("linkSignUp")}>
          <button
            className={cx("p_signUp")}
            onClick={() => {
              onRegister();
            }}
          >
            Sign in now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
