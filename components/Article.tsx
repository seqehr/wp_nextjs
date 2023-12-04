"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";

import { PostsTypes } from "@/types/PostsType";
import getSinglePost from "@/fetches/getSinglePost";
import Link from "next/link";
const Article = (props: any) => {
  const { initialData } = props;
  const { data, isLoading, error } = useQuery<PostsTypes>({
    queryKey: ["Post", initialData.id],
    queryFn: ({ queryKey }) => getSinglePost(queryKey[1] as number),
    initialData: initialData,
  });
  if (error) return "error";
  else if (isLoading) return "loading";
  else
    return (
      <div>
        {/* {JSON.stringify(data)} */}

        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
        {data.tag_names !== undefined &&
          data.tag_names.map((tag, index) => (
            <Link key={index} href={`/tags/${tag.id}/${tag.slug}`}>
              {tag.name}
            </Link>
          ))}
      </div>
    );
};

export default Article;
