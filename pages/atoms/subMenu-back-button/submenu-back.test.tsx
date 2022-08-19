import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubMenuBack from "./submenu-back";

it("Render sub-menu button back", async () => {
  render(
    <SubMenuBack buttonBackPath="/assets/icon" buttonBackAltTag="back button" />
  );
  const backButton = await screen.findByRole("button", { name: "back button" });
  expect(backButton).toBeInTheDocument();
});
