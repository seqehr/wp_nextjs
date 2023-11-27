"use client";

import { useQuery } from "@tanstack/react-query";

export default function Posts(props) {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: props.posts,
  });

  if (isLoading) return "loading";
  else return JSON.stringify(data);
}

async function getPosts() {
  return [{ id: 1, title: "string" }];
}
