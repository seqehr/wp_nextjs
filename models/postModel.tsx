// Libraries

import { useQuery } from "@tanstack/react-query";
// import { useTokenContext } from "@/app/context/token";
import getPosts from "@/fetches/getPosts";
// Types
type Post = {
  id: number;
  title: string;
};

const usePostModel = () => {
  // const { token } = useTokenContext();

  const { data, isLoading } = useQuery<Post>({
    queryKey: ["Post"],
    queryFn: getPosts,
    // initialData: props.posts,
  });

  return { data, isLoading };
};

export default usePostModel;
