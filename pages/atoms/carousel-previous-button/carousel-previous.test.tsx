import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarouselPreviousButton from "./carousel-previous-button";

it("Render'previous' button", () => {
  const { getByRole } = render(<CarouselPreviousButton />);
  const button = screen.getByRole("button", { name: "previous button" });
  expect(button).toBeInTheDocument();
});

it("Is 'previous' button clicked?", () => {
  const clickPrevious = jest.fn();
  const { getByRole } = render(
    <CarouselPreviousButton loadPreviousSlide={clickPrevious} />
  );
  const button = screen.getByRole("button", { name: "previous button" });
  fireEvent.click(button);
  expect(clickPrevious).toHaveBeenCalledTimes(1);
});
