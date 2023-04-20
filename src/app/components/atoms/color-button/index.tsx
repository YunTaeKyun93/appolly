'use client';
type Props = {
    name :string
}
import classNames from "classnames/bind";
import styles from "./color-button.module.scss";
const ss = classNames.bind(styles);

export default function ColorButton ({name}:Props):JSX.Element{
    return <button className={ss('button')}>{name}</button>
}