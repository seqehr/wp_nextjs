
import Link from "next/link";
import Providers from "../providers/providers";
import "./common.min.css";
import getHeader from "@/fetches/getHeader";
// import "https://wp.s9p.ir/wp-includes/css/dist/block-library/common.min.css?ver=6.4.1";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = await getHeader();
  return (
    <html>
      <head dangerouslySetInnerHTML={{ __html: header }} />
      {/* <head /> */}
      <body>
        {/* {JSON.stringify(header)} */}
        <Link href={"/"}>Home</Link>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
