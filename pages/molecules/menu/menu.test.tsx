import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "../../molecules/menu/menu";
import {
  BackButtonTitle,
  MenuData,
  MenuItem,
  SubMenu as SubMenuProps,
} from "../../../data";
import SubMenu from "../sub-menu/sub-menu";

const subMenu: SubMenuProps = {
  title: "",
  url: "",
};

const menuItem: MenuItem = {
  title: "title",
  buttonSearchPath: "/assets/icons/search-icon.svg",
  searchAltTag: "altTag for search",
  url: "url?",
  buttonNextPath: "/assets/icons/button-next.svg",
  buttonNextAltTag: "altTag for button",
  isSubMenu: true,
  subMenu: [subMenu],
};

const menuData: MenuData = {
  menu: [menuItem],
};

const backButton: BackButtonTitle = {
  title: "back",
  buttonBackPath: "/assets/icons/something.svg",
  buttonBackAltTag: "back altTag",
};

it("Render menu input", async () => {
  render(<Menu menu={menuData.menu} />);

  menuData.menu.forEach(async (menu) => {
    const [item] = await screen.findAllByText((menu.title = "Search"));
    expect(item).toBeInTheDocument();
  });
});

it("Render menu Features ", async () => {
  render(<Menu menu={menuData.menu} />);

  menuData.menu.forEach(async (menu) => {
    const [item] = await screen.findAllByText((menu.title = "Features"));
    expect(item).toBeInTheDocument();
  });
});

it("Click on menu 'features' to open sub-Menu", async () => {
  const wrapper = render(<Menu menu={menuData.menu} />);
  const subMenu = render(
    <SubMenu menuData={menuData} backButton={backButton} />
  );

  const item = await screen.getByRole("features", { name: "features button" });
  fireEvent.click(item);

  expect(subMenu.baseElement).toBeInTheDocument();
  expect(wrapper.baseElement).not.toBeEmptyDOMElement();
});
