import Image from "next/image";
import { NavigationData } from "../../../data";

export default function Divider(props: NavigationData) {
  return (
    <div role="divider">
      {props.dividerPath && (
        <Image
          src={props.dividerPath}
          alt={props.altTagDivider}
          width={25}
          height={25}
        />
      )}
    </div>
  );
}
