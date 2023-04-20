import Image from "next/image";

type Props = {
    svgName : string,
    width : number,
    height:number,

}
export default function SvgIcon({svgName,width,height}:Props){
    return (
        <Image
        src={`/svg/${svgName}.svg`}
        alt={`${svgName}`}
        width={`${width}`}
        height={`${height}`}
        priority
      />
    )
}