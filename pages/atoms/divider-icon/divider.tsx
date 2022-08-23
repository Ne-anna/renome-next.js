import Image from "next/image";
import { Divider as DividerData } from "../../../data";

interface DividerProps {
  dividerData: DividerData;
}
export default function Divider(props: DividerProps) {
  return (
    <div>
      {props.dividerData && (
        <Image
          src={props.dividerData.dividerPath}
          alt={props.dividerData.altTagDivider}
          width={25}
          height={25}
        />
      )}
    </div>
  );
}
