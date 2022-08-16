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
