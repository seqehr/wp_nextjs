"use client";

import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";
export default function Posts(props: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["Post"],
    queryFn: getPosts,
    initialData: props.posts,
  });

  if (isLoading) return "loading";
  else return JSON.stringify(props.posts);
}
