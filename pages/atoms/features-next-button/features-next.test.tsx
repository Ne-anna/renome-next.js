import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturesNext from "./features-next";

it("Render features next button", async () => {
  render(<FeaturesNext />);
  const nextButton = await screen.findByRole("button", {
    name: "features next button",
  });
  expect(nextButton).toBeInTheDocument();
});
