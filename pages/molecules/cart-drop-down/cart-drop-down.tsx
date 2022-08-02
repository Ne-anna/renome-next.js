import style from "./cart-drop-down.module.scss";
import { Cart } from "../../../data";

const CartDropDown = (props: Cart) => {
  return (
    <div className={style.cart}>
      {props.cart.map((post, index) => {
        return (
          <div className={style.cartItem} key={index}>
            <p className={style.cartText}>{post.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartDropDown;
