import { BackButtonTitle } from "../../../data";
import Image from "next/image";
import style from "../subMenu-back-button/submenu-back.module.scss";

export default function SubMenuBack({
  buttonBackPath,
  buttonBackAltTag,
}: BackButtonTitle) {
  return (
    <button className={style.subNavigationButton} aria-label="back button">
      <Image
        src={buttonBackPath}
        alt={buttonBackAltTag}
        width={15}
        height={15}
      />
    </button>
  );
}
