import Posts from "@/app/ssr/posts";

import getPosts from "@/fetches/getPosts";

export default async function Home() {
  const initialData = await getPosts();
  // const { token } = useTokenContext();
  return (
    <>
      {/* {token} */}
      <Posts posts={initialData} />
    </>
  );
}
