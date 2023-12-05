import getSingleTagPosts from "@/fetches/getSingleTagPosts";
import React from "react";
import Tag from "@/components/Tags/Tag";
type PageProps = {
  params: { tagParams: number[] };
};
const TagPage = async ({ params }: PageProps) => {
  const { tagParams } = params;
  const initialData = await getSingleTagPosts(tagParams[0]);
  return <Tag initialData={initialData} tagId={tagParams[0]} />;
};

export default TagPage;
