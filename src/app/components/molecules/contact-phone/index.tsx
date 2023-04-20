import classNames from "classnames/bind";
import styles from "./contact-phone.module.scss";
import PhoneSvg from "../../atoms/phone-svg";
import SvgIcon from '../../atoms/svg-icon/index';
const ss = classNames.bind(styles);
export default function ContactPhone() {
  return (
    <div className={ss("wrapper")}>
      <SvgIcon width={18} height={18} svgName="phone"/>

      <p>(480) 555-0103</p>
    </div>
  );
}
