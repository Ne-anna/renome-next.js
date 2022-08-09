import { render, screen } from "@testing-library/react";
import { GalleryData, GalleryImage } from "../../../data";
import "@testing-library/jest-dom";
import Gallery from "./gallery";

const galleryImage: GalleryImage = {
  altTag: "",
  path: "",
};

const galleryData: GalleryData = {
  galleryImages: [galleryImage],
  title: "Gallery",
  subTitle: "MORE ABOUT US VIA PHOTOS",
};

it("Let's see does gallery title match", () => {
  render(
    <Gallery
      title={galleryData.title}
      subTitle={galleryData.subTitle}
      galleryImages={galleryData.galleryImages}
    />
  );
  const item = screen.getByText(galleryData.title);
  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent("Gallery");
});

it("Let's see does gallery sub-title match", () => {
  render(
    <Gallery
      title={galleryData.title}
      subTitle={galleryData.subTitle}
      galleryImages={galleryData.galleryImages}
    />
  );
  const item = screen.getByText(galleryData.subTitle);
  expect(item).toBeInTheDocument();
  expect(item).toHaveTextContent("MORE ABOUT US VIA PHOTOS");
});

it("Let's see does gallery images match", () => {
  render(
    <Gallery
      title={galleryData.title}
      subTitle={galleryData.subTitle}
      galleryImages={galleryData.galleryImages}
    />
  );
  const item = screen.getAllByText(galleryData.galleryImage);

  //jest test array of objects
  // expect(item).toEqual(
  //   expect.arrayContaining([
  //     expect.objectContaining({}),
  //     expect.objectContaining({}),
  //   ])
  // );
  expect(item).toBeInTheDocument();
  // expect(item).toHaveTextContent("");
});
