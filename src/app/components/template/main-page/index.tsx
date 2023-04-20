import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import About from "../about";
import SvgImageLoader from "../../atoms/svg-image-loader/index";
import DownloadContent from "./../../molecules/download-content/index";

export default function MainPage() {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("border-container")}>
        <div className={ss("introduction")}>
          <div className={ss("header")}>
            <h1>A GREAT APP MAKES</h1>
            <h1>YOUR LIFE BETTER</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={ss("download-content")}>
            <span>Download App Now</span>
            <DownloadContent />
          </div>
        </div>
      </div>
      <SvgImageLoader svgName="mainphone" width={646} height={725} />
    </div>
  );
}
