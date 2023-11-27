import Posts from "@/app/posts";
import Fetch from "@/helpers/Fetch";
import getPosts from "@/fetches/getPosts";
export default async function Home() {
  const initialData = await getPosts();

  return <Posts posts={initialData} />;
}
