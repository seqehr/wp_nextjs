import getSinglePost from "@/fetches/getSinglePost";
import React from "react";
import Article from "@/components/Article";
type Props = {};

const ArticlePage = async ({ params }) => {
  const { articleParams } = params;
  const initialData = await getSinglePost(articleParams[0]);
  return <Article initialData={initialData} />;
};

export default ArticlePage;
