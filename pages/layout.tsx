import Footer from "./organisms/footer/footer";
import {
  BackButtonData,
  Cart,
  FooterData,
  MenuData,
  NavigationData,
} from "../data";
import Navigation from "./organisms/navigation/navigation";

interface LayoutDataProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: BackButtonData;
  footerDataProps: FooterData;
  children: React.ReactNode;
}

export default function Layout(props: LayoutDataProps) {
  return (
    <div>
      <Navigation
        navigationData={props.navigationData}
        cartData={props.cartData}
        menuData={props.menuData}
        backButtonData={props.backButtonData}
      />
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
