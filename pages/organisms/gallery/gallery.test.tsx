import { render, screen } from "@testing-library/react";
import { GalleryData, GalleryImageData } from "../../../data";
import "@testing-library/jest-dom";
import Gallery from "./gallery";

const galleryImage: GalleryImageData = {
  altTag: "someAltTag",
  path: "/img",
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

it("Let's see does gallery images have alt tag text or image", () => {
  render(
    <Gallery
      title={galleryData.title}
      subTitle={galleryData.subTitle}
      galleryImages={galleryData.galleryImages}
    />
  );
  galleryData.galleryImages.forEach((galleryImage) => {
    const imageByAltText = screen.getByAltText(galleryImage.altTag);
    expect(imageByAltText).toBeInTheDocument();
  });
});
