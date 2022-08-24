import { render, screen } from "@testing-library/react";
import { FooterData, FooterIcons } from "../../../data";
import "@testing-library/jest-dom";
import Footer from "./footer";

const footerIcons: FooterIcons = {
  icon: "/assets/icons/icon-name.svg",
  altTag: "some test atlTag for icon",
  id: 3,
};

const footerData: FooterData = {
  title: "Follow us",
  footerIcons: [footerIcons],
  logo: "Renome",
  copyright: "Copyright 2022 renome by estetiq",
};

it("Time to render footer title", () => {
  render(
    <Footer
      title={footerData.title}
      logo={footerData.logo}
      copyright={footerData.copyright}
      footerIcons={footerData.footerIcons}
    />
  );
  const title = screen.getByText(footerData.title);
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent("Follow");
});

it("Time to render footer logo", () => {
  render(
    <Footer
      title={footerData.title}
      logo={footerData.logo}
      copyright={footerData.copyright}
      footerIcons={footerData.footerIcons}
    />
  );
  const logo = screen.getByText(footerData.logo);
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveTextContent("Re");
});

it("Time to render footer copyright", () => {
  render(
    <Footer
      title={footerData.title}
      logo={footerData.logo}
      copyright={footerData.copyright}
      footerIcons={footerData.footerIcons}
    />
  );
  const copyright = screen.getByText(footerData.copyright);
  expect(copyright).toBeInTheDocument();
  expect(copyright).toHaveTextContent("2022");
});

it("Time to render footer icons", () => {
  render(
    <Footer
      title={footerData.title}
      logo={footerData.logo}
      copyright={footerData.copyright}
      footerIcons={footerData.footerIcons}
    />
  );

  footerData.footerIcons.forEach((footerIcons) => {
    const footerIconAltTag = screen.getByAltText(footerIcons.altTag);
    expect(footerIconAltTag).toBeInTheDocument();
  });
});
