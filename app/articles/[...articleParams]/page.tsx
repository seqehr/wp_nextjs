import getSinglePost from "@/fetches/getSinglePost";
import React from "react";
import Article from "@/components/Article";
type Props = {};
type PageProps = {
  params: { articleParams: number[] };
};
const ArticlePage = async ({ params }: PageProps) => {
  const { articleParams } = params;
  const initialData = await getSinglePost(articleParams[0]);
  return <Article initialData={initialData} />;
};

export default ArticlePage;
