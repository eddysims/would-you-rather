import { Layout } from "@/components/Layout";
import { Protected } from "@/components/Protected";
import Head from "next/head";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Profile | Would You Rather</title>
      </Head>
      <Layout>
        <Protected>Your Profile</Protected>
      </Layout>
    </>
  );
}

export default Dashboard;
