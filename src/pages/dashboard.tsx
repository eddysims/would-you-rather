import { Layout } from "@/components/Layout";
import { Protected } from "@/components/Protected";
import Head from "next/head";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Protected>Your Profile</Protected>
      </Layout>
    </>
  );
}

export default Dashboard;
