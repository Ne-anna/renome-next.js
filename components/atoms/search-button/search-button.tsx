import { MenuItem } from "../../../data";
import Image from "next/image";
import style from "../search-button/search-button.module.scss";

export default function Search(props: MenuItem) {
  return (
    <button className={style.button}>
      {props.buttonSearchPath && (
        <Image
          src={props.buttonSearchPath}
          alt={props.searchAltTag}
          width={20}
          height={20}
        />
      )}
    </button>
  );
}
