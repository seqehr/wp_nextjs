"use client";

import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";
import { useTokenContext } from "@/context/token";
import usePostModel from "@/models/postModel";
export default function Posts(props) {
  const post = usePostModel();
  // const { data, isLoading } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: getPosts,
  //   initialData: props.posts,
  // });

  if (post.isLoading) return "loading";
  else return JSON.stringify(post);
}
