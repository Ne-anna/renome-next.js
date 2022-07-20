import Footer from "./organisms/footer/footer";
import {
  backButtonData,
  Cart,
  FooterData,
  MenuData,
  NavigationData,
} from "../data";
import Navigation from "./organisms/navigation/navigation";

interface FooterDataProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: backButtonData;
  footerDataProps: FooterData;
  children: React.ReactNode;
}

export default function Layout(props: FooterDataProps) {
  return (
    <div>
      <Navigation
        logo={props.navigationData.logo}
        cartPath={props.navigationData.cartPath}
        altTagCart={props.navigationData.altTagCart}
        count={props.navigationData.count}
        dividerPath={props.navigationData.dividerPath}
        altTagDivider={props.navigationData.altTagDivider}
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
