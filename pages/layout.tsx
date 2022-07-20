import Footer from "./organisms/footer/footer";
import { FooterData } from "../data";

interface FooterDataProps {
  footerDataProps: FooterData;
  children: React.ReactNode;
}

export default function Layout(props: FooterDataProps) {
  return (
    <div>
      <p>Navigation coming soon</p>
      {props.children}
      <Footer
        title={props.footerDataProps.title}
        logo={props.footerDataProps.logo}
        copyright={props.footerDataProps.copyright}
        footerIcons={props.footerDataProps.footerIcons}
      />
    </div>
  );
}
