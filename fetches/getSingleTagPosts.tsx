import Fetch from "@/helpers/Fetch";
export default async function getSingleTagPosts(id: number) {
  return Fetch({
    url: `wp/v2/posts?tags=${id}`,
    fetchMethod: "get",
  }).then((result) => result.json());
}
