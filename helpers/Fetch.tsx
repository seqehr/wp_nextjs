interface OutPut {
  url: string;
  fetchMethod?: string;
  body?: JSON;
  token?: string;
}

const Fetch = async ({ url, fetchMethod, body, token }: OutPut) => {
  const baseUrl = "https://wp.s9p.ir/wp-json/";
  var newHeaders = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  console.log("request token : " + token);
  return fetch(`${baseUrl}${url}`, {
    method: fetchMethod ?? "get",
    body: JSON.stringify(body),
    headers:
      typeof token == "string"
        ? newHeaders
        : {
            "Content-Type": "application/json",
          },
  });
};

export default Fetch;
