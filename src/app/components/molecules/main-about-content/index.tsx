import SvgImageLoader from "../../atoms/svg-image-loader";
import MainHeader from "./../../atoms/main-header/index";
import classNames from "classnames/bind";
import styles from "./main-about-content.module.scss";
import MainAboutContentDescription from "../../atoms/main-about-content-description";
type Props = {
  [key: string]: string;
};
export default function MainAboutContent({
  title,
  description,
  titleColor,
  descriptionColor,
}: Props) {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("header")}>
        <SvgImageLoader svgName="checkbox-circle" width={24} height={24} />
        <MainHeader title={title} color={titleColor} fontSize={20}/>
      </div>
      <div className={ss("content")}>
        <MainAboutContentDescription description={description} color={descriptionColor} />
      </div>
    </div>
  );
}
