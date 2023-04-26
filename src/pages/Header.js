import classNames from "classnames/bind";

import Styles from "./Admin.module.scss";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { Link, NavLink, Route, Routes } from "react-router-dom";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// eslint-disable-next-line no-unused-vars
import PostAddIcon from "@material-ui/icons/PostAdd";
// eslint-disable-next-line no-unused-vars
import AddCommentIcon from "@material-ui/icons/AddComment";

import Accounts from "../components/Accounts";
import Posts from "../components/Posts";
import News from "../components/News";
import { useState } from "react";
import Introduce from "../components/Introduce";
import AddAccount from "../components/Accounts/AddAccount";
import EditAccount from "../components/Accounts/EditAccount";

const cx = classNames.bind(Styles);

const account = JSON.parse(localStorage.getItem("account"));

const mainNav = [
  {
    display: "Quản lý tài khoản",
    path: "/accounts",
    icon: <AccountBoxIcon />,
  },
  {
    display: "Quản lý bài viết",
    path: "/posts",
    icon: <PostAddIcon />,
  },
  {
    display: "Quản lý tin tức",
    path: "/news",
    icon: <AddCommentIcon />,
  },
];

function Header(props, { children }) {
  const [isCheck, SetIsCheck] = useState(true);
  const { onLogout } = props;

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <div className={cx("box_avatar")}>
          <img className={cx("avatar")} src={account.avatar} alt="Avatar" />
          <h4 className={cx("name_avatar")}>{account.name}</h4>
          <p className={cx("hello_avatar")}>Chào mừng bạn trở lại</p>
        </div>
        <div className={cx("nav_sidebar")}>
          {mainNav.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={(nav) => cx("nav_account", { active: nav.isActive })}
              onClick={(nav) => SetIsCheck(false)}
            >
              <div className={cx("icon_nav")}>{item.icon}</div>
              <div className={cx("nav_title")}>{item.display}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={cx("content_wrapper")}>
        <div className={cx("header")}>
          <Link to="/">
            <button className={cx("icon_logout")} onClick={handleLogout}>
              <ExitToAppIcon />
            </button>
          </Link>
        </div>
        <div className={cx("content")}>
          <Routes>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/news" element={<News />} />
            <Route path="/accounts/addAccount" element={<AddAccount />} />
            <Route path="/accounts/editAccount" element={<EditAccount />} />
          </Routes>
          {isCheck && <Introduce />}
        </div>
      </div>
    </div>
  );
}

export default Header;
