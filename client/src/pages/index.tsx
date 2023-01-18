import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // TODO: Fetch site statuses from the API and display them on the page.
  }, []);
  return (
    <>
      <Head>
        <title>Mintlify Technical Assignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="m-auto text-center">
          TODO: Create a page that displays a list of site statuses (
          <Link
            className="underline"
            href="https://mintlify.notion.site/Technical-Assignment-c00e557503e14d978bed75f004bc3493"
          >
            spec
          </Link>
          ).
        </div>
      </main>
    </>
  );
}
