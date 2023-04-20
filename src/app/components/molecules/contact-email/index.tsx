import CheckBoxSvg from "./../../atoms/checkbox-svg/index";
import classNames from "classnames/bind";
import styles from "./contact-email.module.scss";
import SvgIcon from '../../atoms/svg-icon/index';
const ss = classNames.bind(styles);
export default function ContactEmail() {
  return (
    <div className={ss("wrapper")}>
      <SvgIcon width={18} height={18} svgName="checkbox"/>

      <p>info@youremail.com</p>
    </div>
  );
}
