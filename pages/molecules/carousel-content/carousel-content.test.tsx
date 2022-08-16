import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarouselContent from "./carousel-content";
import { CarouselButton, CarouselData, CarouselItem } from "../../../data";

const carouselItem: CarouselItem = {
  title: "Made with love",
  subTitle: "for you",
  altTag: "egg and chicken",
  path: "/assets/img/carousel_img_1.png",
};

interface CarouselProps {
  carouselData: CarouselData;
}

const carouselData: CarouselData = {
  carousel: [carouselItem],
};

const carouselProps: CarouselProps = {
  carouselData: carouselData,
};

it("Let's check carousel title", () => {
  render(<CarouselContent carousel={carouselData.carousel} />);
  carouselData.carousel.forEach((carousel) => {
    const title = screen.getByText(carousel.title);
    expect(title).toBeInTheDocument();
  });
});

it("Let's check carousel sub-title", () => {
  render(<CarouselContent carousel={carouselData.carousel} />);
  carouselData.carousel.forEach((carousel) => {
    const subTitle = screen.getByText(carousel.subTitle);
    expect(subTitle).toBeInTheDocument();
  });
});

it("Let's check carousel altTag", () => {
  render(<CarouselContent carousel={carouselData.carousel} />);
  carouselData.carousel.forEach((carousel) => {
    const imageAltTag = screen.getByAltText(carousel.altTag);
    expect(imageAltTag).toBeInTheDocument();
  });
});
