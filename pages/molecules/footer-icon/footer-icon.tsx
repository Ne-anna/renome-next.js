import { FooterIcons } from "../../../data";
import Image from "next/image";

export default function FooterIcon(props: FooterIcons) {
  return <Image src={props.icon} alt={props.altTag} width={200} height={200} />;
}
