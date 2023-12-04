"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";

import { PostsTypes } from "@/types/PostsType";
import getSingleTagPosts from "@/fetches/getSingleTagPosts";
import Link from "next/link";
const Tag = (props: any) => {
  const { initialData, tagId } = props;
  const { data, isLoading, error } = useQuery<PostsTypes>({
    queryKey: ["Tag", tagId],
    queryFn: ({ queryKey }) => getSingleTagPosts(queryKey[1] as number),
    initialData: initialData,
  });
  if (error) return "error";
  else if (isLoading) return "loading";

  return (
    <div>
      {data.map((post, index) => (
        <Link key={index} href={`/articles/${post.id}/${post.slug}`}>
          {" "}
          {post.title.rendered}
        </Link>
      ))}
    </div>
  );
  return (
    <div>
      {/* {JSON.stringify(data)} */}

      <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
    </div>
  );
};

export default Tag;
