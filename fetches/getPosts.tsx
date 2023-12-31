import Fetch from "@/helpers/Fetch";
export default async function getPosts() {
  return Fetch({
    url: "wp/v2/posts",
    fetchMethod: "get",
  }).then((result) => result.json());
}
