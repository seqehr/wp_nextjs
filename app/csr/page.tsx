import Posts from "@/app/csr/posts";
import Fetch from "@/helpers/Fetch";
import getPosts from "@/fetches/getPosts";
import { useContext } from "react";
// import { useTokenContext } from "@/app/context/token";

export default async function Home() {
  return (
    <>
      {/* {token} */}
      <Posts />
    </>
  );
}
