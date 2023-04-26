import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  className,
  primary,
  onClick,
  leftIcon,
  rightIcon,
  children,
  no,
  to,
  href,
  ...passProp
}) {
  let Comp = "button";
  const _prop = {
    onClick,
    ...passProp,
  };

  if (to) {
    _prop.to = to;
    Comp = Link;
  } else if (href) {
    _prop.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className, // dung classnames de css
    primary,
    no,
    ...passProp,
  });

  return (
    <Comp className={classes} {..._prop}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
