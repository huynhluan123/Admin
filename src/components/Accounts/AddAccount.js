import classNames from "classnames/bind";
import Styles from "./Accounts.module.scss";

import Button from "../Button";

import axios from "axios";

import AddIcon from "@material-ui/icons/Add";

import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";

const cx = classNames.bind(Styles);

function AddAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("https://643013b9b289b1dec4c0c296.mockapi.io/accounts")
      .then((res) => res.json())
      .then((acc) => {
        setAccounts(acc);
      });
  }, []);

  const handleAdd = () => {
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
      console.log("them tai khoan that bai");
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
      alert("them tai khoan thanh cong");
    }
  };

  return (
    <div className={cx("wrapper_from")}>
      <form className={cx("form")}>
        <Button to="/accounts" className={cx("close_edit")}>
          <CloseIcon />
        </Button>
        <div className={cx("title_edit")}>
          <h4>Thêm THÔNG TIN ACCOUNT</h4>
        </div>
        <div className={cx("box_input")}>
          <div className={cx("text_box")}>
            <p className={cx("text_edit")}>Tên Hiển Thị: </p>
          </div>
          <div>
            <input
              value={fullName}
              type="text"
              className={cx("input_login")}
              placeholder="Nhập tên mới"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("box_input")}>
          <div className={cx("text_box")}>
            <p className={cx("text_edit")}>Tài Khoản: </p>
          </div>
          <div>
            <input
              value={email ? email : accounts.email}
              type="text"
              className={cx("input_login")}
              placeholder="Nhập email mới"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("box_input")}>
          <div className={cx("text_box")}>
            <p className={cx("text_edit")}> Mật Khẩu: </p>
          </div>
          <input
            value={password}
            type="text"
            className={cx("input_login")}
            placeholder="Password mới"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={cx("box_input")}>
          <div className={cx("text_box")}>
            <p className={cx("text_edit")}> Thay Ảnh Đại Diện: </p>
          </div>
          <input
            value={avatar}
            type="text"
            className={cx("input_login")}
            placeholder="Thêm link ảnh"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className={cx("avatar_edit")}>
          <p className={cx("text_avatar")}> Ảnh Đại Diện:</p>
          <div className={cx("wrapper_avatar")}>
            <div className={cx("box_avatar")}>
              {avatar ? (
                <img className={cx("avatar_show")} src={avatar} alt="Avatar" />
              ) : (
                <AddIcon />
              )}
            </div>
          </div>
        </div>
        <div className={cx("btn_button")}>
          <Button primary to="/accounts" className={cx("btn_edit")}>
            Hủy
          </Button>
          <button className={cx("btn_edit")} onClick={handleAdd}>
            thêm
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAccount;
