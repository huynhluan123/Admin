import classNames from "classnames/bind";
import Styles from "./Accounts.module.scss";

import axios from "axios";

import AddIcon from "@material-ui/icons/Add";

import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(Styles);

function AddAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [account, setAccount] = useState("");
  console.log(account);
  const [accounts, setAccounts] = useState([]);

  console.log(email, password, fullName, avatar);

  useEffect(() => {
    setAccount(JSON.parse(localStorage.getItem("accounts")));
    // fetch("https://643013b9b289b1dec4c0c296.mockapi.io/accounts")
    //   .then((res) => res.json())
    //   .then((acc) => {
    //     setAccounts(acc);
    //   });
  }, []);

  // useEffect(() => {
  //   setEmail(account.email);
  //   setAvatar(account.avatar);
  //   setFullName(account.name);
  //   setPassword(account.password);
  // }, [account]);
  console.log(account.id);
  const handleEdit = async () => {
    // const updatedItem = {
    //   name: fullName,
    //   email: email,
    //   avatar: avatar,
    //   password: password,
    // };
    // alert(updatedItem);
    await axios
      .put("https://643013b9b289b1dec4c0c296.mockapi.io/accounts/0", {
        name: "fullName",
        email: "email",
        avatar: "avatar",
        password: "password",
      })
      .then((response) => {
        console.log(response.data);
        // handle success
      })
      .catch((error) => {
        console.log(error.response.data);
        // handle error
      });
  };

  return (
    <div className={cx("wrapper_from")}>
      <form className={cx("form")}>
        <Link className={cx("close_edit")} to="/accounts">
          <CloseIcon />
        </Link>
        <div className={cx("title_edit")}>
          <h4>SỬA THÔNG TIN ACCOUNT</h4>
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
              value={email}
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
          <Link className={cx("btn_edit")} to="/accounts">
            Hủy
          </Link>
          <button className={cx("btn_edit")} onClick={handleEdit}>
            Sửa
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAccount;
