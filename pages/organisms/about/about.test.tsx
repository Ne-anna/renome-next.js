import { render, screen, cleanup } from "@testing-library/react";
import About from "./about";

it("should render content props correctly", () => {
  render(<About textData.title
    ="WE CREATE DELICOUS MEMORIES" />);
  // expect(screen.getByRole("h5", { name: "WE CREATE DELICOUS MEMORIES" }));
  expect(screen.getByText("WE CREATE DELICOUS MEMORIES")).toBeInTheDocument();
});
