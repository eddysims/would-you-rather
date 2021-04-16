import Head from "next/head";
import { useSession } from "next-auth/client";
import { useLazyQuery } from "@apollo/client";
import { Layout } from "@/components/Layout";
import { Protected } from "@/components/Protected";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";
import { Profile } from "@/components/Profile";
import { DASHBOARD_QUERY } from "@/graphql/dashboardQuery";

import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

function Dashboard() {
  const [session] = useSession();
  const [user, setUser] = useState();
  const [getUser, { data }] = useLazyQuery(DASHBOARD_QUERY, {
    variables: {
      id: session?.user?.id,
    },
  });

  useEffect(() => {
    if (session?.user) {
      getUser();
    }
  }, [session]);

  useEffect(() => {
    if (data?.users) {
      setUser(data?.users[0]);
    }
  }, [data]);

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
            {user && <Profile user={user} />}
          </Container>
        </Protected>
      </Layout>
    </>
  );
}

export default Dashboard;
