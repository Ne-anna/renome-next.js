import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from "../lib/fetchFunction";
import About from "./organisms/about/about";
import Layout from "../pages/layout";
import { RootObject } from "../data";

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
      <Layout>
        <main>
          <About
            images={allData.about.images}
            title={allData.about.title}
            subTitle={allData.about.subTitle}
            text={allData.about.text}
          />
        </main>
      </Layout>
    </>
  );
}
