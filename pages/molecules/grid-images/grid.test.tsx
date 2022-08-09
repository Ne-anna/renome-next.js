import { render, screen } from "@testing-library/react";
import Grid from "./grid";
import { Images } from "../../../data";
import "@testing-library/jest-dom";

const imageData: Images = {
  top: "",
  altTagBack: "white house from afar",
  bottom: "",
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
  const backImage = screen.getByTestId("backImage");
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
  const frontImage = screen.getByTestId("frontImage");
  expect(frontImage).toBeInTheDocument();
});
