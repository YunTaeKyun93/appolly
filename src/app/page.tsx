import Image from 'next/image'
import './globals.css'
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import MainPage from './components/template/main-page/index';

export default function Home() {
  const ss = classNames.bind(styles);

  return (
  <div className={ss('wrapper')}>

    <MainPage/>
  </div>
  )
}
