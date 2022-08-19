import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarouselNextButton from "./carousel-next-button";

it("Render 'next' button", () => {
  const { getByRole } = render(<CarouselNextButton />);
  const button = screen.getByRole("button", { name: "next button" });
  expect(button).toBeInTheDocument();
});

it("Is 'next' button clicked?", () => {
  const clickNext = jest.fn();
  const { getByRole } = render(
    <CarouselNextButton loadNextSlide={clickNext} />
  );
  const button = screen.getByRole("button", { name: "next button" });
  fireEvent.click(button);
  expect(clickNext).toHaveBeenCalledTimes(1);
});
