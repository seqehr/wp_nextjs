// "use client";
// import React from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export default function Providers({ children }) {
//   const [queryClient] = React.useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { TokenContextProvider } from "../context/token";
export default function Providers({ children }) {
  return (
    <ReactQueryProvider>
      <TokenContextProvider>{children} </TokenContextProvider>
    </ReactQueryProvider>
  );
}
