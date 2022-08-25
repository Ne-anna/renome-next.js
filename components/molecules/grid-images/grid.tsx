import { Images } from "../../../data";
import Image from "next/image";
import style from "../grid-images/grid.module.scss";

export default function Grid(props: Images) {
  return (
    <div className={style.grid}>
      <div className={style.backImage}>
        {props.top && (
          <Image
            src={props.top}
            alt={props.altTagBack}
            width={335}
            height={223}
            layout="responsive"
          />
        )}
      </div>
      <div className={style.frontImage}>
        {props.bottom && (
          <Image
            src={props.bottom}
            alt={props.altTagFront}
            width={335}
            height={223}
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
}
