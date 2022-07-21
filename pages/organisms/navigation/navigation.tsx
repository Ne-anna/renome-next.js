import { NavigationData } from "../../../data";
import style from "../navigation/navigation.module.scss";
import Image from "next/image";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import { useState } from "react";

export default function Navigation(props: NavigationData) {
  const [isMainMenuOpen, setMainMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <div className={style.nav}>
      <h2 className={style.navigationLeft}>{props.logo}</h2>
      <div className={style.navigationRight}>
        <div className={style.navigationCart}>
          <Image
            src={props.cartPath}
            alt={props.altTagCart}
            width={18}
            height={25}
          />
        </div>
        <p className={style.navigationCount}>{props.count}</p>
        <div className={style.navigationDivide}>
          <Image
            src={props.dividerPath}
            alt={props.altTagDivider}
            width={25}
            height={25}
          />
        </div>
        <div
          className={
            isMainMenuOpen
              ? style.navigationHamburgerActive
              : style.navigationHamburger
          }
          onClick={toggleMenu}
        >
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
