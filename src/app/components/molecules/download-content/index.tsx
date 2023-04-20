"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./download-content.module.scss";
import SvgImageLoader from "../../atoms/svg-image-loader";

export default function DownloadContent() {
    const ss = classNames.bind(styles);

  const downloadStore = [
    { name: "google-play-download", href: "/" },
    { name: "app-store-download", href: "/" },
  ];
  return (
    <div className={ss('wrapper')}>
      {downloadStore.map((store) => (
        <Link href={store.href} key={store.name}>
          <SvgImageLoader svgName={store.name} width={151} height={45} />
        </Link>
      ))}
    </div>
  );
}
