import classNames from "classnames/bind";
import Styles from "./News.module.scss";

const cx = classNames.bind(Styles);

function News() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box_wrapper")}>
        <div className={cx("title_box")}>
          <h5 className={cx("title")}> Danh sách tin tức</h5>
        </div>
        <div className={cx("box_content")}>
          <div className={cx("box_btn")}>
            <button className={cx("btn_account")}>Thêm tin tức</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
