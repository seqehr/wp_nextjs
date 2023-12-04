import Fetch from "@/helpers/Fetch";
export default async function getSinglePost(id: number) {
  return Fetch({
    url: `wp/v2/posts/${id}`,
    fetchMethod: "get",
  }).then((result) => result.json());
}
