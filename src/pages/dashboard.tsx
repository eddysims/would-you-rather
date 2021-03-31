import Head from "next/head";
import { useSession } from "next-auth/client";
import { useQuery } from "@apollo/client";
import { Layout } from "@/components/Layout";
import { Protected } from "@/components/Protected";
import { ProfileHeader } from "@/components/pages/dashboard/ProfileHeader";
import { GET_USER_QUERY } from "@/graphql/getUserQuery.gql";

function Dashboard() {
  const [session] = useSession();
  const { data } = useQuery(GET_USER_QUERY, {
    variables: {
      id: session?.user?.id,
    },
  });

  const user = data?.users[0];

  return (
    <>
      <Head>
        <title>Profile | Would You Rather</title>
      </Head>
      <Layout>
        <Protected>
          <ProfileHeader data={user} />
        </Protected>
      </Layout>
    </>
  );
}

export default Dashboard;
