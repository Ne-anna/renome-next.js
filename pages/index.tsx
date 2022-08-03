import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from "../lib/fetchFunction";
import About from "./organisms/about/about";
import Layout from "../pages/layout";
import { RootObject } from "../data";
import Gallery from "./organisms/gallery/gallery";
import Carousel from "./organisms/carousel/carousel";

interface allDataProps {
  allData: RootObject;
}

export const getStaticProps: GetStaticProps = async () => {
  const allData = await getSortedPostsData();

  return {
    props: {
      allData,
    },
  };
};

export default function RenomeApp({ allData }: allDataProps) {
  return (
    <>
      <Head>
        <title>Renome next.js</title>
      </Head>
      <Layout
        navigationData={{
          logo: allData.navigation.logo,
          cartPath: allData.navigation.cartPath,
          altTagCart: allData.navigation.altTagCart,
          count: allData.navigation.count,
          dividerPath: allData.navigation.dividerPath,
          altTagDivider: allData.navigation.altTagDivider,
        }}
        cartData={{
          cart: allData.cart,
        }}
        menuData={{
          menu: allData.menu,
        }}
        backButtonData={{
          buttonData: allData.backButtonTitle,
        }}
        footerDataProps={allData.footer}
      >
        <main>
          <Carousel
            carouselData={{
              carousel: allData.carousel,
            }}
            carouselButtonData={{
              carouselButtonNext: allData.carouselButtons.carouselButtonNext,
              altTagNext: allData.carouselButtons.altTagNext,
              carouselButtonPrevious:
                allData.carouselButtons.carouselButtonPrevious,
              altTagPrevious: allData.carouselButtons.altTagPrevious,
            }}
          />
          <About
            images={allData.about.images}
            title={allData.about.title}
            subTitle={allData.about.subTitle}
            text={allData.about.text}
          />
          <Gallery
            title={allData.gallery.title}
            subTitle={allData.gallery.subTitle}
            galleryImages={allData.gallery.galleryImages}
          />
        </main>
      </Layout>
    </>
  );
}
