import classNames from "classnames/bind";
import Styles from "./Accounts.module.scss";

import Button from "../Button";

import axios from "axios";
import Modal from "react-modal";

import { useEffect, useState } from "react";

import BackspaceIcon from "@material-ui/icons/Backspace";
import EditIcon from "@material-ui/icons/Edit";

const cx = classNames.bind(Styles);

Modal.setAppElement("#root");

function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("https://643013b9b289b1dec4c0c296.mockapi.io/accounts")
      .then((response) => {
        // Nếu yêu cầu thành công, hiển thị dữ liệu trả về lên trang web
        setAccounts(response.data);
      })
      .catch((error) => {
        // Nếu yêu cầu thất bại, hiển thị thông báo lỗi
        console.error(error);
      });
  }, []);

  const handleDeleteAccount = (id) => {
    axios
      .delete(`https://643013b9b289b1dec4c0c296.mockapi.io/accounts/${id}`)
      .then(() => {
        setAccounts(accounts.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleShowEdit = (id) => {
    const ace = {
      id: id,
      name: accounts[id].name,
      email: accounts[id].email,
      avatar: accounts[id.avatar],
      password: accounts[id].password,
    };
    var myJSON = JSON.stringify(ace);
    console.log(ace);
    localStorage.removeItem("accounts");
    localStorage.setItem("accounts", myJSON);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("box_wrapper")}>
        <div className={cx("title_box")}>
          <h5 className={cx("title")}> Danh sách tài khoản</h5>
        </div>
        <div className={cx("box_content")}>
          <div className={cx("box_btn")}>
            <Button
              primary
              to="/accounts/addAccount"
              className={cx("btn_account")}
            >
              Thêm tài khoản
            </Button>
          </div>
          <div className={cx("table_accounts")}>
            <table border="1">
              <thead className={cx("thread")}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Tài khoản</th>
                  <th scope="col">Mật khẩu</th>
                  <th scope="col">Ảnh đại diện</th>
                  <th scope="col">Công cụ</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      <img
                        className={cx("avatar")}
                        src={item.avatar}
                        alt="avatar"
                      />
                    </td>
                    <td className={cx("box_btn_table")}>
                      <button
                        onClick={() => handleDeleteAccount(item.id)}
                        className={cx("delete_account")}
                      >
                        <BackspaceIcon />
                      </button>

                      <Button
                        onClick={() => handleShowEdit(index)}
                        to="/accounts/editAccount"
                        className={cx("delete_account")}
                      >
                        <EditIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
