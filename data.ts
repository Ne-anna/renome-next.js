export interface Cart {
  cart: CartItem[];
}

export interface CartItem {
  item: string;
}
export interface Divider {
  dividerPath: string;
  altTagDivider: string;
}

export interface CartPath {
  cartPath: string;
  altTagCart: string;
  toggleCart(): void;
}
export interface NavigationData {
  logo: string;
  cartPath: string;
  altTagCart: string;
  count: string;
  dividerPath: string;
  altTagDivider: string;
}

export interface MenuData {
  menu: MenuItem[];
  openSubMenu?(): void;
  closeSubMenu?(): void;
}

export interface MenuItem {
  title?: string;
  buttonSearchPath?: string;
  searchAltTag?: string;
  url?: string;
  buttonNextPath?: string;
  buttonNextAltTag?: string;
  isSubMenu?: boolean;
  subMenu?: SubMenu[];
}

export interface SubMenu {
  title: string;
  url: string;
}

export interface BackButtonData {
  buttonData: BackButtonTitle;
}

export interface BackButtonTitle {
  title?: string;
  buttonBackPath: string;
  buttonBackAltTag: string;
}

export interface CarouselData {
  carousel: CarouselItem[];
  slideIndex?: number;
  slideDirection?: string;
  prevSlide?: number;
  blockAnimation?: boolean;
}

export interface CarouselItem {
  title: string;
  subTitle: string;
  altTag: string;
  path: string;
}

export interface CarouselButton {
  carouselButtonNext?: string;
  altTagNext?: string;
  carouselButtonPrevious?: string;
  altTagPrevious?: string;
  loadPreviousSlide?(): void;
  loadNextSlide?(): void;
}

export interface Images {
  top: string;
  altTagBack: string;
  bottom: string;
  altTagFront: string;
}

export interface AboutData {
  images: Images;
  title: string;
  subTitle: string;
  text: string;
}

export interface GalleryImage {
  altTag: string;
  path: string;
}

export interface GalleryData {
  title: string;
  subTitle: string;
  galleryImages: GalleryImage[];
}

export interface FooterIcons {
  id: number;
  icon: string;
  altTag: string;
}

export interface FooterData {
  title: string;
  footerIcons: FooterIcons[];
  logo: string;
  copyright: string;
}
export interface RootObject {
  cart: CartItem[];
  navigation: NavigationData;
  menu: MenuItem[];
  backButtonTitle: BackButtonTitle;
  carousel: CarouselItem[];
  carouselButtons: CarouselButton;
  about: AboutData;
  gallery: GalleryData;
  footer: FooterData;
}

export const defaultData: RootObject = {
  cart: [],
  navigation: {
    logo: "",
    cartPath: "",
    altTagCart: "",
    count: "",
    dividerPath: "",
    altTagDivider: "",
  },
  menu: [],
  backButtonTitle: {
    title: "",
    buttonBackPath: "",
    buttonBackAltTag: "",
  },
  carousel: [],
  carouselButtons: {
    carouselButtonNext: "",
    altTagNext: "",
    carouselButtonPrevious: "",
    altTagPrevious: "",
  },
  about: {
    images: {
      top: "",
      altTagBack: "",
      bottom: "",
      altTagFront: "",
    },
    title: "",
    subTitle: "",
    text: "",
  },
  gallery: {
    title: "",
    subTitle: "",
    galleryImages: [],
  },
  footer: {
    title: "",
    footerIcons: [],
    logo: "",
    copyright: "",
  },
};
