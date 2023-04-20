import classNames from "classnames/bind";
import styles from "./main-description.module.scss";
type Props = {
    description: string;
  color: string;
};
export default function MainDescription({ description, color }: Props) {
  const ss = classNames.bind(styles);

  return (
    <div className={ss('wrapper')}>
      <p className={ss("description")} style={{ color: `${color}` }}>
        {description}
      </p>
    </div>
  );
}
