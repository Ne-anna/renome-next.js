import Image from "next/image";
import { GalleryImageData } from "../../../data";

export default function GalleryImage(props: GalleryImageData) {
  return <Image src={props.path} alt={props.altTag} width={400} height={400} />;
}
