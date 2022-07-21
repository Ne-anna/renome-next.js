import { Cart, NavigationData } from "../../../data";
import style from "../navigation/navigation.module.scss";
import Image from "next/image";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";
import { useState } from "react";

interface NavigationDataProps {
  navigationData: NavigationData;
  cartData: Cart;
}

export default function Navigation(props: NavigationDataProps) {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState<boolean>(false);

  const toggleCart = () => {
    console.log("clicked on cart");
    setMainMenuOpen(false);
    setCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <div className={style.nav}>
      <h2 className={style.navigationLeft}>{props.navigationData.logo}</h2>
      <div className={style.navigationRight}>
        <div className={style.navigationCart} onClick={toggleCart}>
          <Image
            src={props.navigationData.cartPath}
            alt={props.navigationData.altTagCart}
            width={18}
            height={25}
          />
        </div>
        <p className={style.navigationCount}>{props.navigationData.count}</p>
        <div className={style.navigationDivide}>
          <Image
            src={props.navigationData.dividerPath}
            alt={props.navigationData.altTagDivider}
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
        {isCartOpen && <CartDropDown cart={props.cartData.cart} />}
      </div>
    </div>
  );
}
