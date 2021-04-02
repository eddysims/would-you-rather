import Head from "next/head";
import { useSession } from "next-auth/client";
import { useQuery } from "@apollo/client";
import { Layout } from "@/components/Layout";
import { Protected } from "@/components/Protected";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
import { GET_USER_QUERY } from "@/graphql/getUserQuery.gql";

import styles from "./dashboard.module.css";

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
          <Container>
            <div className={styles.title}>
              <Heading as="h1">Dashboard</Heading>
            </div>
            <div className={styles.profile}>Profile</div>
            {JSON.stringify(user)}
          </Container>
        </Protected>
      </Layout>
    </>
  );
}

export default Dashboard;
