import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartButton from "./cart-button";

it("let's test cart button", () => {
  const clickCart = jest.fn();
  render(
    <CartButton
      cartData={{
        cartPath: "/assets/icons",
        altTagCart: "cart icon",
        toggleCart: clickCart,
      }}
    />
  );
  const cartIcon = screen.getByAltText("cart icon");

  fireEvent.click(cartIcon);
  expect(clickCart).toHaveBeenCalledTimes(1);
  expect(cartIcon).toBeInTheDocument();
});
