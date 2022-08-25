import Footer from "../components/organisms/footer/footer";
import {
  backButtonData,
  Cart,
  FooterData,
  MenuData,
  NavigationData,
} from "../data";
import Navigation from "../components/organisms/navigation/navigation";

interface LayoutDataProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: backButtonData;
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
