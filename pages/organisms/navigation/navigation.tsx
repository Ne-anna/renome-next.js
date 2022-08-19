import { BackButtonData, Cart, MenuData, NavigationData } from "../../../data";
import style from "../navigation/navigation.module.scss";
import Image from "next/image";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";
import { useEffect, useRef, useState } from "react";
import Menu from "../../molecules/menu/menu";
import SubMenu from "../../molecules/sub-menu/sub-menu";
import CartButton from "../../atoms/cart-button/cart-button";
import Divider from "../../atoms/divider-icon/divider";

interface NavigationDataProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: BackButtonData;
  toggleCart?(): void;
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
    if (isSubMenuOpen) {
      setMainMenuOpen(false);
      setSubMenuOpen(false);
    }
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

  if (typeof window !== "undefined") {
    if (isCartOpen || isMainMenuOpen || isSubMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <div className={style.nav}>
      <h2 className={style.navigationLeft}>{props.navigationData.logo}</h2>
      <div className={style.navigationRight} ref={Ref}>
        <div>
          <CartButton
            cartPath={props.navigationData.cartPath}
            altTagCart={props.navigationData.altTagCart}
            toggleCart={toggleCart}
          />
        </div>
        <p className={style.navigationCount}>{props.navigationData.count}</p>
        <div className={style.navigationDivide}>
          <Divider
            dividerPath={props.navigationData.dividerPath}
            altTagDivider={props.navigationData.altTagDivider}
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
        <div role="cart">
          {isCartOpen && <CartDropDown cart={props.cartData.cart} />}
        </div>
        <div role="menu">
          {isMainMenuOpen && (
            <Menu menu={props.menuData.menu} openSubMenu={openSubMenu} />
          )}
        </div>
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
