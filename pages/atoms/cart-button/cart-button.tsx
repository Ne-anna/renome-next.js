import Image from "next/image";
import { CartPath } from "../../../data";
import style from "../cart-button/cart-button.module.scss";

interface CartProps {
  cartData: CartPath;
}
export default function CartButton(props: CartProps) {
  return (
    <button
      className={style.cart}
      onClick={props.cartData.toggleCart}
      aria-label="cart button"
    >
      {props.cartData.cartPath && (
        <Image
          src={props.cartData.cartPath}
          alt={props.cartData.altTagCart}
          width={18}
          height={25}
        />
      )}
    </button>
  );
}
