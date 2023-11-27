import Posts from "@/app/posts";
export default async function Home() {
  const initialData = await getPosts();

  return <Posts posts={initialData} />;
}

async function getPosts() {
  return [{ id: 1, title: "string" }];
}
