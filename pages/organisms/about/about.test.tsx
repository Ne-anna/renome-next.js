import { cleanup, render, screen } from "@testing-library/react";
import About from "./about";
import "@testing-library/jest-dom";
import Grid from "../../molecules/grid-images/grid";

const imageData = {
  top: "",
  altTagBack: "white house from afar",
  bottom: "",
  altTagFront: "close-up second house floor window",
};

const textData = {
  images: imageData,
  title: "About",
  subTitle: "WE CREATE DELICOUS MEMORIES",
  text: "Renome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan’s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant’s grand modern architecture. Renome offers the room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one of the few Manhattan restaurants to have a coveted 3-star Michelin rating.",
};

afterEach(() => {
  cleanup();
});

it("Checking if title is correct", () => {
  render(<About textData={textData} imageData={imageData} />);
  const item = screen.getByText(textData.title);
  expect(item).toHaveTextContent("About");
});

it("Checking if sub-title is correct", () => {
  render(<About textData={textData} imageData={imageData} />);
  const item = screen.getByText(textData.subTitle);
  expect(item).toHaveTextContent("WE CREATE DELICOUS MEMORIES");
});

it("this should check if there is parapgraph", () => {
  render(<About textData={textData} imageData={imageData} />);
  const item = screen.getByText(textData.text);
  expect(item).toHaveTextContent("renowned restaurant");
});

it("this should check if there is Grid component in About", () => {
  render(<About textData={textData} imageData={imageData} />);
  const item = screen.getByTestId("GridID");
  expect(item).toBeInTheDocument();
});
