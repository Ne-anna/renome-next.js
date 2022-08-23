import Image from "next/image";
import { NavigationData } from "../../../data";
import style from "../cart-button/cart-button.module.scss";

export default function CartButton(props: NavigationData) {
  return (
    <button
      className={style.cart}
      onClick={props.toggleCart}
      aria-label="cart button"
    >
      {props.cartPath && (
        <Image
          src={props.cartPath}
          alt={props.altTagCart}
          width={18}
          height={25}
        />
      )}
    </button>
  );
}
