import Image from "next/image";

type Props = {
  imageName: string;
  width: number;
  height: number;
};

export default function ImageLoader({imageName, width, height}:Props) {
  return <Image width={width} height={height} src={`/images/${imageName}.png`} alt={imageName}/>;
}
