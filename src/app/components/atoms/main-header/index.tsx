import classNames from "classnames/bind";
import styles from "./main-header.module.scss";
type Props ={
    title :string;
    color: string;
    fontSize?:number;
}
export default function MainHeader ({title,color,fontSize}:Props){
    const ss = classNames.bind(styles);

    return (
        <h1 className={ss('title')} style={{color:`${color}`, fontSize:`${fontSize}px`}}>{title}</h1>
    )
}