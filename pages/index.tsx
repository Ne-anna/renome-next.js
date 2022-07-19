import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from "../lib/fetchFunction";
import About from "./organisms/about/about";
import Layout from "../pages/layout";
import { RootObject } from "../data";
import Gallery from "./organisms/gallery/gallery";

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
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Head>
        <title>Renome next.js</title>
      </Head>
      <Layout>
        <main>
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
