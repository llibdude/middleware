import { GetStaticProps } from "next/types";
import React from "react";

export const getStaticProps: GetStaticProps = () => {
  const data = [];

  return {
    props: {
      initialData: data,
      pageTitle: "Blog",
      pageUrl: `/blog/`,
      pageType: "blog",
      pageDescription: "Blog",
      revalidate: 5,
    },
  };
};

const Blog: React.FC = () => {
  return <div />;
};

export default Blog;
