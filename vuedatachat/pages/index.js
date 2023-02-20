import Head from "next/head";
import Chatbox from "../components/Chatbox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vuedata Chatbox</title>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className="flex justify-center items-start md:items-center py-10 h-screen bg-gray-900">
        <Chatbox />
      </main>
    </>
  );
}
