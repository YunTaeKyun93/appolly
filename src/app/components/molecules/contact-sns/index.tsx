'use client';
import classNames from "classnames/bind";
import styles from "./contact-sns.module.scss";
import  Link  from 'next/link';
import SvgImageLoader from '../../atoms/svg-image-loader/index';

export default function ContactSns (){
    const ss = classNames.bind(styles);
    const snsList = [
        {name:"facebook",href:'/'},
        {name:"instagram",href:'/'},
        {name:"twitter",href:'/'},
        {name:"youtube",href:'/'},
    ]
    return (
        <div className={ss("wrapper")}>
            {snsList.map(menu=>(
                <Link key={menu.name} href={menu.href}>
                  <SvgImageLoader svgName={menu.name} width={18} height={18}/>
                </Link>
            ))}
   
        </div>
    )
}