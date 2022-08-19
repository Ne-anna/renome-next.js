import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartButton from "./cart-button";

it("let's test cart button", () => {
  const clickCart = jest.fn();
  const { getByRole } = render(<CartButton toggleCart={clickCart} />);
  const cartIcon = screen.getByRole("button", { name: "cart button" });
  fireEvent.click(cartIcon);
  expect(clickCart).toHaveBeenCalledTimes(1);
});
