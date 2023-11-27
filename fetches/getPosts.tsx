import Fetch from "@/helpers/Fetch";
export default async function getPosts() {
  return Fetch({ url: "test", fetchMethod: "post" }).then((result) =>
    result.json()
  );
}
