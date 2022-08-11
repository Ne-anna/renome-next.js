import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarouselButton, CarouselData, CarouselItem } from "../../../data";
import Carousel from "./carousel";
import CarouselPreviousButton from "../../atoms/carousel-previous-button/carousel-previous-button";
import CarouselNextButton from "../../atoms/carousel-next-button/carousel-next-button";

const carouselItem: CarouselItem = {
  title: "Made with love",
  subTitle: "for you",
  altTag: "egg and chicken",
  path: "/assets/img/carousel_img_1.png",
};

interface CarouselProps {
  carouselData: CarouselData;
  carouselButtonData: CarouselButton;
}

const carouselData: CarouselData = {
  carousel: [carouselItem],
};

const carouselButtonData: CarouselButton = {
  carouselButtonNext: "/assets/icons/icon-name.svg",
  altTagNext: "arrow left",
  carouselButtonPrevious: "/assets/icons/icon-name.svg",
  altTagPrevious: "arrow right",
  // loadPreviousSlide(): void {},
  // loadNextSlide(): void {},
};
const carouselProps: CarouselProps = {
  carouselData: carouselData,
  carouselButtonData: carouselButtonData,
};

it("Let's check carousel title, sub-title and image altTag", () => {
  render(
    <Carousel
      carouselData={carouselProps.carouselData}
      carouselButtonData={carouselProps.carouselButtonData}
    />
  );
  carouselData.carousel.forEach((carousel) => {
    const title = screen.getByText(carousel.title);
    const subTitle = screen.getByText(carousel.subTitle);
    const imageAltTag = screen.getByAltText(carousel.altTag);
    expect(subTitle).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(imageAltTag).toBeInTheDocument();
  });
});

//better to test buttons from parent compoent then create seperate test file in child component

it("Test 'next' button", () => {
  const { getByRole } = render(<CarouselNextButton />);
  const button = screen.getByRole("button", { name: "next button" });
  expect(button).toBeInTheDocument();
});

it("Test 'previous' button", () => {
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

it("Is 'previous' button clicked?", () => {
  const clickNext = jest.fn();
  const { getByRole } = render(
    <CarouselNextButton loadNextSlide={clickNext} />
  );
  const button = screen.getByRole("button", { name: "next button" });
  fireEvent.click(button);
  expect(clickNext).toHaveBeenCalledTimes(1);
});
