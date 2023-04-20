import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import Image from "next/image";
export default function MainPage() {
  const ss = classNames.bind(styles);

  return (
    <div className={ss('wrapper')}>
      {/* <Image
        src="/background-Images/main-background.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="background"
        className={ss("background")}
      /> */}
      <h1>Hello</h1>
    </div>
  );
}
