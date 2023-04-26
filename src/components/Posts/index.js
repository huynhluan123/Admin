import classNames from "classnames/bind";
import Styles from "./Posts.module.scss";

const cx = classNames.bind(Styles);

function Posts() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box_wrapper")}>
        <div className={cx("title_box")}>
          <h5 className={cx("title")}> Danh sách bài viết</h5>
        </div>
        <div className={cx("box_content")}>
          <div className={cx("box_btn")}>
            <button className={cx("btn_account")}>Thêm bài viết</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
