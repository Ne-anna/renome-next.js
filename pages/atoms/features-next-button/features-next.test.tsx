import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturesNext from "./features-next";

it("Render features next button", () => {
  render(<FeaturesNext />);
  const nextButton = screen.findByRole("button", {
    name: "features next button",
  });
  expect(nextButton).toBeInTheDocument();
});
