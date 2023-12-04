import Fetch from "@/helpers/Fetch";
export default async function getHeader() {
  return Fetch({
    url: "hs/v1/header",
    fetchMethod: "get",
  }).then((result) => result.json());
}
