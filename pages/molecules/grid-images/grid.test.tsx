import { render, screen } from "@testing-library/react";
import Grid from "./grid";
import { Images } from "../../../data";
import "@testing-library/jest-dom";

const imageData: Images = {
  top: "/test",
  altTagBack: "white house from afar",
  bottom: "/test",
  altTagFront: "close-up second house floor window",
};

it("time to check Grid components back images", () => {
  render(
    <Grid
      top={imageData.top}
      bottom={imageData.bottom}
      altTagBack={imageData.altTagBack}
      altTagFront={imageData.altTagFront}
    />
  );
  const backImage = screen.getByAltText(imageData.altTagBack);
  expect(backImage).toBeInTheDocument();
});

it("time to check Grid components front images", () => {
  render(
    <Grid
      top={imageData.top}
      bottom={imageData.bottom}
      altTagBack={imageData.altTagBack}
      altTagFront={imageData.altTagFront}
    />
  );
  const frontImage = screen.getByAltText(imageData.altTagFront);
  expect(frontImage).toBeInTheDocument();
});
