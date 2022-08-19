import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Divider from "./divider";

it("lets test the navigation divider if it's there", () => {
  render(<Divider />);
  const navigationDivider = screen.getByRole("divider");
  expect(navigationDivider).toBeInTheDocument();
});
