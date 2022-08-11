import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarouselButton, CarouselData, CarouselItem } from "../../../data";
import Carousel from "./carousel";
import CarouselPreviousButton from "../../atoms/carousel-previous-button/carousel-previous-button";
import CarouselNextButton from "../../atoms/carousel-next-button/carousel-next-button";

// enum SlideDirections {
//   current = "current",
//   right = "right",
//   left = "left",
// }

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
  // slideIndex: 2,
  // slideDirection: SlideDirections.current,
  // prevSlide: 1,
  // blockAnimation: true,
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
it("Is 'previous' button clicked?", () => {
  const handleClickMock = jest.fn();
  const { getByTestId } = render(
    <CarouselPreviousButton loadPreviousSlide={handleClickMock} />
  );
  const button = screen.getByTestId("buttonPrevious");
  fireEvent.click(button);
  expect(handleClickMock).toHaveBeenCalledTimes(1);
});

it("Is 'previous' button clicked?", () => {
  const handleClickMock = jest.fn();
  const { getByTestId } = render(
    <CarouselNextButton loadNextSlide={handleClickMock} />
  );
  const button = screen.getByTestId("buttonNext");
  fireEvent.click(button);
  expect(handleClickMock).toHaveBeenCalledTimes(1);
});

it("Test 'next' button", () => {
  const { getByTestId } = render(<CarouselNextButton />);
  expect(getByTestId("buttonNext")).toBeInTheDocument();
});

it("Test 'previous' button", () => {
  const { getByTestId } = render(<CarouselPreviousButton />);
  expect(getByTestId("buttonPrevious")).toBeInTheDocument();
});

// it("Is 'next' button clicked?", () => {
//   const handleClickMock = jest.fn();
//   const { getByTestId } = render(
//     <CarouselNextButton loadNextSlide={handleClickMock} />
//   );
//   const button = screen.getByTestId("buttonTest2");
//   fireEvent.click(button);
//   expect(handleClickMock).toHaveBeenCalledTimes(1);
// });

// it("Let's check carousel button image altTag", () => {
//   render(
//     <Carousel
//       carouselData={carouselProps.carouselData}
//       carouselButtonData={carouselProps.carouselButtonData}
//     />
//   );
//   const buttonAltTag = screen.getByAltText(carouselButtonData.altTagNext);
//   expect(buttonAltTag).toBeInTheDocument();
// });
