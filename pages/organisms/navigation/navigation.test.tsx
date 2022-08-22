import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  BackButtonData,
  BackButtonTitle,
  Cart,
  CartItem,
  MenuData,
  MenuItem,
  NavigationData,
  SubMenu,
} from "../../../data";
import Navigation from "./navigation";
import Menu from "../../molecules/menu/menu";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";

const navigtionData: NavigationData = {
  logo: "Renome",
  cartPath: "/assets/icons/icon-name.svg",
  altTagCart: "test",
  count: "2",
  dividerPath: "/assets/icons/another-test/svg",
  altTagDivider: "altTag for divider",
};

const cartItem: CartItem = {
  item: "checkout",
};

const cartData: Cart = {
  cart: [cartItem],
};

const subMenu: SubMenu = {
  title: "",
  url: "",
};

const menuItem: MenuItem = {
  title: "title",
  buttonSearchPath: "/assets/icons/search-icon.svg",
  searchAltTag: "altTag for search",
  url: "url?",
  buttonNextPath: "path again",
  buttonNextAltTag: "altTag for button",
  isSubMenu: true,
  subMenu: [subMenu],
};

const menuData: MenuData = {
  menu: [menuItem],
};

const backButtonTitle: BackButtonTitle = {
  title: "back",
  buttonBackPath: "/assets/icons",
  buttonBackAltTag: "back button",
};

const backButtonData: BackButtonData = {
  buttonData: backButtonTitle,
};

it("let's test the navigation logo", () => {
  render(
    <Navigation
      navigationData={navigtionData}
      cartData={cartData}
      menuData={menuData}
      backButtonData={backButtonData}
    />
  );
  const navigationLogo = screen.getByText("Renome");
  expect(navigationLogo).toBeInTheDocument();
});

it("let's test the navigation count", () => {
  render(
    <Navigation
      navigationData={navigtionData}
      cartData={cartData}
      menuData={menuData}
      backButtonData={backButtonData}
    />
  );
  const navigationCount = screen.getByText("2");
  expect(navigationCount).toBeInTheDocument();
});

it("let's check the cart drop-down", async () => {
  const wrapper = render(
    <Navigation
      navigationData={navigtionData}
      cartData={cartData}
      menuData={menuData}
      backButtonData={backButtonData}
    />
  );
  const cart = render(<CartDropDown cart={cartData.cart} />);

  const cartButton = screen.getByRole("button", { name: "cart button" });
  fireEvent.click(cartButton);

  expect(cart.baseElement).toBeInTheDocument();

  fireEvent.mouseDown(document.body) || fireEvent.mouseDown(cartButton);
  expect(cart.baseElement).not.toBeEmptyDOMElement();
});

it("let's check the menu drop-down", async () => {
  const wrapper = render(
    <Navigation
      navigationData={navigtionData}
      cartData={cartData}
      menuData={menuData}
      backButtonData={backButtonData}
    />
  );
  const menu = render(<Menu menu={menuData.menu} />);

  const cartButton = screen.getByRole("button", { name: "cart button" });

  const Hamburgerbutton = screen.getByRole("hamburger", {
    name: "hamburger button",
  });
  fireEvent.click(Hamburgerbutton);

  expect(menu.baseElement).toBeInTheDocument();

  fireEvent.mouseDown(document.body) ||
    fireEvent.mouseDown(Hamburgerbutton) ||
    fireEvent.mouseDown(cartButton);
  expect(menu.baseElement).not.toBeEmptyDOMElement();
});
