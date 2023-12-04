import React from "react";
import getPosts from "@/fetches/getPosts";
import Home from "@/components/Home/Home";
import { PostsTypes } from "@/types/PostsType";
type Props = {};

const HomePage = async (props: Props) => {
  const initialData = await getPosts();

  return (
    <>
      <Home initialData={initialData} />
    </>
  );
};

export default HomePage;
