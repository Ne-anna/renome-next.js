import { render, screen } from "@testing-library/react";
import About, { AboutDataProps } from "./about";

interface NeedData {
  allData: AboutDataProps;
}

// let props: AboutDataProps;

it("should render content props correctly", () => {
  render(
    <About
      textData={props.allData.textData}
      imageData={props.allData.imageData}
    />
  );
  // expect(screen.getByRole("h5", { name: "WE CREATE DELICOUS MEMORIES" }));
  expect(screen.getByText(props.allData.textData.title)).toBeInTheDocument();
});
