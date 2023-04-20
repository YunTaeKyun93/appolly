import classNames from "classnames/bind";
import styles from "./contact-email.module.scss";
import SvgImageLoader from '../../atoms/svg-image-loader/index';
const ss = classNames.bind(styles);
export default function ContactEmail() {
  return (
    <div className={ss("wrapper")}>
      <SvgImageLoader width={18} height={18} svgName="checkbox"/>

      <p>info@youremail.com</p>
    </div>
  );
}
