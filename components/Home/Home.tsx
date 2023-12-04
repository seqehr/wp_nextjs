"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";

import { PostsTypes } from "@/types/PostsType";
import Link from "next/link";
const Home = (props: any) => {
  const { initialData } = props;
  const { data, isLoading, error } = useQuery<PostsTypes[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    initialData: initialData,
  });
  if (error) return "error";
  else if (isLoading) return "loading";
  else
    return (
      <div>
        {data?.map((value, index) => (
          <div key={index}>
            <Link href={`/articles/${value.id}/${value.slug}`}>
              {" "}
              <h1>{value.title.rendered}</h1>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: value.content.rendered }}
            ></div>
          </div>
        ))}
      </div>
    );
};

export default Home;
