"use client";

import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import HeaderList, { MenuItem } from "../../atoms/header-list";
import ColorButton from "../../atoms/color-button/index";
import ImageLoader from './../../atoms/image-loader/index';

export default function Header() {
  const ss = classNames.bind(styles);
  const leftMenu = [
    { title: "HOME", href: "/" },
    { title: "ABOUT", href: "/" },
    { title: "FEATURES", href: "/" }
  ];
  const rightMenu = [
    { title: "SCREENSHOT", href: "/" },
    { title: "BLOG", href: "/" }
  ];
  return (
    <div className={ss("wrapper")}>
      <div className={ss("container")}>
        <ul className={ss("menu", "left")}>
          {leftMenu.map((menu) => (
            <Link href={menu.href} className={ss("menu-item")} key={menu.title}>
              <HeaderList menu={menu.title} />
            </Link>
          ))}
        </ul>
        <Link href="/">
          <div className={ss("logo-container")}>
          <ImageLoader imageName="logo" width={167} height={28}/>
     
          </div>
        </Link>

        <ul className={ss("menu", "right")}>
          {rightMenu.map((menu) => (
            <Link href={menu.href} className={ss("menu-item")} key={menu.title}>
              <HeaderList menu={menu.title} />
            </Link>
          ))}

          <ColorButton name="DOWNLOAD" />
        </ul>
      </div>
    </div>
  );
}
