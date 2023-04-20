import classNames from "classnames/bind";
import styles from "./about.module.scss";
import MainHeader from "./../../atoms/main-header/index";
import MainDescription from "./../../atoms/main-description/index";
import SvgImageLoader from "./../../atoms/svg-image-loader/index";
import MainAboutContent from "./../../molecules/main-about-content/index";
export default function About() {
  const ss = classNames.bind(styles);
  const aboutHeader = {
    title: "About Our App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  };
  const aboutContents = [
    {
      title: "Creative design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
      titleColor: "#232233",
      descriptionColor: "#6C6C72",
    },
    {
      title: "easy to use",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
      titleColor: "#232233",
      descriptionColor: "#6C6C72",
    },
    {
      title: "Best user experince",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
      titleColor: "#232233",
      descriptionColor: "#6C6C72",
    },
  ];
  return (
    <div className={ss("wrapper")}>
      <div className={ss("header")}>
        <MainHeader
          title={aboutHeader.title}
          color="#232233"
          fontSize={31.25}
        />
        <MainDescription
          description={aboutHeader.description}
          color="#6C6C72"
        />
      </div>
      <div className={ss("content-container")}>
        <SvgImageLoader svgName="main-about-phone" width={386} height={526} />
        <div className={ss("content")}>
          {aboutContents.map((content) => (
            <MainAboutContent
              title={content.title}
              description={content.description}
              titleColor={content.titleColor}
              descriptionColor={content.descriptionColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
