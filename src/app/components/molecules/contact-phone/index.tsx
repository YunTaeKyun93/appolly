import classNames from "classnames/bind";
import styles from "./contact-phone.module.scss";
import SvgImageLoader from '../../atoms/svg-image-loader/index';
const ss = classNames.bind(styles);
export default function ContactPhone() {
  return (
    <div className={ss("wrapper")}>
      <SvgImageLoader width={18} height={18} svgName="phone"/>

      <p>(480) 555-0103</p>
    </div>
  );
}
