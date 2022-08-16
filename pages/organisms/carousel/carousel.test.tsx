import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarouselButton, CarouselData, CarouselItem } from "../../../data";
import Carousel from "./carousel";
import CarouselPreviousButton from "../../atoms/carousel-previous-button/carousel-previous-button";

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
};

const carouselProps: CarouselProps = {
  carouselData: carouselData,
  carouselButtonData: carouselButtonData,
};

it("Let's see if the function is called when 'next' button is pressed", () => {
  render(
    <Carousel
      carouselData={carouselProps.carouselData}
      carouselButtonData={carouselProps.carouselButtonData}
    />
  );

  const button = screen.getByRole("button", { name: "next button" });
  fireEvent.click(button);
});

it("Let's see if the function is called when 'previous' button is pressed", () => {
  render(
    <Carousel
      carouselData={carouselProps.carouselData}
      carouselButtonData={carouselProps.carouselButtonData}
    />
  );

  const button = screen.getByRole("button", { name: "previous button" });
  fireEvent.click(button);
});
