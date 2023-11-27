"use client";

import { useQuery } from "@tanstack/react-query";
import getPosts from "@/fetches/getPosts";

export default function Posts(props) {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: props.posts,
  });

  if (isLoading) return "loading";
  else return JSON.stringify(data);
}
