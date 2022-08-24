import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../../atoms/search-button/search-button";

it("Render test search button", async () => {
  render(<Search />);

  const searchButton = await screen.findByRole("button", { name: "search" });
  expect(searchButton).toBeInTheDocument();
});
