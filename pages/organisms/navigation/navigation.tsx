import { backButtonData, Cart, MenuData, NavigationData } from "../../../data";
import style from "../navigation/navigation.module.scss";
import Image from "next/image";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";
import { useEffect, useRef, useState } from "react";
import Menu from "../../molecules/menu/menu";
import SubMenu from "../../molecules/sub-menu/sub-menu";
import { type } from "os";

interface NavigationDataProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: backButtonData;
}

export default function Navigation(props: NavigationDataProps) {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const Ref = useRef<HTMLDivElement>(null);

  const toggleCart = () => {
    setMainMenuOpen(false);
    setCartOpen(!isCartOpen);
    setSubMenuOpen(false);
  };

  const toggleMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
    setCartOpen(false);
    // if (isSubMenuOpen) {
    //   setMainMenuOpen(false);
    //   setSubMenuOpen(false);
    // }
    if (isMainMenuOpen) {
      document.body.style.overflow === "hidden";
      console.log("should be open menu");
    } else {
      document.body.style.overflow = "unset";
      console.log("closed");
    }
    // console.log(isMainMenuOpen);
  };

  const openSubMenu = () => {
    setSubMenuOpen(true);
    setMainMenuOpen(false);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
    setMainMenuOpen(true);
  };

  useEffect(() => {
    const closeWithOutsideClick = (e: Event) => {
      if (!Ref.current?.contains(e.target as HTMLInputElement)) {
        setCartOpen(false);
      }
      if (!Ref.current?.contains(e.target as HTMLInputElement)) {
        setMainMenuOpen(false);
        setSubMenuOpen(false);
      }
    };
    document.body.addEventListener("mousedown", closeWithOutsideClick);
  }, [Ref]);

  // if (typeof window !== "undefined") {
  //   if (isCartOpen || isMainMenuOpen || isSubMenuOpen) {
  //     document.body.style.overflow === "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }

  const StopScroll = () => {
    if (isCartOpen || isMainMenuOpen || isSubMenuOpen) {
      document.body.style.overflow === "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // var stopScroll = () => {
  //   if (isCartOpen || isMainMenuOpen || isSubMenuOpen) {
  //     document.body.style.overflow === "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // };

  // useEffect(() => {
  //   if (isCartOpen || isMainMenuOpen || isSubMenuOpen) {
  //     document.body.style.overflow === "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, []);
  // stopScroll();

  return (
    <div className={style.nav}>
      <h2 className={style.navigationLeft}>{props.navigationData.logo}</h2>
      <div className={style.navigationRight} ref={Ref}>
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
            isMainMenuOpen || isSubMenuOpen
              ? style.navigationHamburgerActive
              : style.navigationHamburger
          }
          onClick={toggleMenu}
        >
          <Hamburger />
        </div>
        {isCartOpen && <CartDropDown cart={props.cartData.cart} />}
        {isMainMenuOpen && (
          <Menu menu={props.menuData.menu} openSubMenu={openSubMenu} />
        )}
        {isSubMenuOpen && (
          <SubMenu
            menuData={{
              menu: props.menuData.menu,
              closeSubMenu: closeSubMenu,
              openSubMenu: openSubMenu,
            }}
            backButton={{
              buttonBackAltTag:
                props.backButtonData.buttonData.buttonBackAltTag,
              buttonBackPath: props.backButtonData.buttonData.buttonBackPath,
              title: props.backButtonData.buttonData.title,
            }}
          />
        )}
      </div>
    </div>
  );
}
