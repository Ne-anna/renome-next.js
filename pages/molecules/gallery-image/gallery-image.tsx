import Image from "next/image";
import { GalleryImage } from "../../../data";

export default function GalleryImages(props: GalleryImage) {
  return <Image src={props.path} alt={props.altTag} width={200} height={200} />;
}