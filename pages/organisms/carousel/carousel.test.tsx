import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarouselButton, CarouselData, CarouselItem } from "../../../data";
import Carousel from "./carousel";

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
  carousel: [carouselItem, carouselItem, carouselItem],
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

it("Let's see if the function is called when 'next' button is pressed", async () => {
  render(
    <Carousel
      carouselData={carouselProps.carouselData}
      carouselButtonData={carouselProps.carouselButtonData}
    />
  );
  const carouselItem = await screen.findByRole("carousel-item-0");
  const carouselItem1 = await screen.findByRole("carousel-item-1");
  const carouselItem2 = await screen.findByRole("carousel-item-2");

  const button = screen.getByRole("button", { name: "next button" });
  fireEvent.click(button);

  expect(carouselItem1).toHaveClass("item active-right");
  expect(carouselItem).toHaveClass("item-right");

  fireEvent.click(button);

  expect(carouselItem2).toHaveClass("item active-right");
  expect(carouselItem1).toHaveClass("item item-right");

  fireEvent.click(button);

  expect(carouselItem2).toHaveClass("item item-right");
});

it("Let's see if the function is called when 'previous' button is pressed", async () => {
  render(
    <Carousel
      carouselData={carouselProps.carouselData}
      carouselButtonData={carouselProps.carouselButtonData}
    />
  );
  const carouselItem = await screen.findByRole("carousel-item-0");
  const carouselItem1 = await screen.findByRole("carousel-item-1");
  const carouselItem2 = await screen.findByRole("carousel-item-2");

  const button = screen.getByRole("button", { name: "previous button" });
  fireEvent.click(button);

  expect(carouselItem1).toHaveClass("item animationActive");
  expect(carouselItem).toHaveClass("item item-left");

  fireEvent.click(button);

  expect(carouselItem1).toHaveClass("item active-left");
  expect(carouselItem2).toHaveClass("item item-left");

  fireEvent.click(button);

  expect(carouselItem2).toHaveClass("item animationActive");
});
