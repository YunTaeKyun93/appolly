import classNames from "classnames/bind";
import styles from "./app-feature.module.scss";

import MainHeader from "./../../atoms/main-header/index";
import MainDescription from "./../../atoms/main-description/index";
export default function AppFeature() {
  const ss = classNames.bind(styles);
  const appFeatureHeader = {
    title: "App features",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  };
  return (
    <div className={ss("wrapper")}>
      <div className={ss("header")}>
        <MainHeader
          title={appFeatureHeader.title}
          color="#ffffff"
          fontSize={31.25}
        />
        <MainDescription
          description={appFeatureHeader.description}
          color="#ffffff"
        />
      </div>
    </div>
  );
}
