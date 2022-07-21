import { MenuItem } from "../../../data";
import Image from "next/image";
import style from "../search-button/search-button.module.scss";

export default function Search({ buttonSearchPath, searchAltTag }: MenuItem) {
  return (
    <button className={style.button}>
      <Image
        src={buttonSearchPath}
        alt={searchAltTag}
        width={200}
        height={200}
      />
    </button>
  );
}
