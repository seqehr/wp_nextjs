import getSingleTagPosts from "@/fetches/getSingleTagPosts";
import React from "react";
import Tag from "@/components/Tags/Tag";
type Props = {};

const TagPage = async ({ params }) => {
  const { tagParams } = params;
  const initialData = await getSingleTagPosts(tagParams[0]);
  return <Tag initialData={initialData} tagId={tagParams[0]} />;
};

export default TagPage;
