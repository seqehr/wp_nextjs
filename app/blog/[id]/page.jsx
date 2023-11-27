export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.data.map((post) => ({
    id: post.id.toString(),
  }));
}

const Slug = async ({ params }) => {
  const post = await getPost(params.id);
  return JSON.stringify(post);
};

async function getPosts() {
  return await fetch(
    "https://lezatkhayati.com/api/theme/courses/free/popular",
    { method: "post" }
  ).then((res) => res.json());
}

async function getPost(id) {
  return await fetch(`https://lezatkhayati.com/api/courses/single/${id}`).then(
    (res) => res.json()
  );
}
export default Slug;
