import style from "../features-next-button/features-next.module.scss";
import Image from "next/image";
import { MenuItem } from "../../../data";

export default function FeaturesNext(props: MenuItem) {
  return (
    <button className={style.button} aria-label="features next button">
      {props.buttonNextPath && (
        <Image
          src={props.buttonNextPath}
          alt={props.buttonNextAltTag}
          width={15}
          height={15}
        />
      )}
    </button>
  );
}
