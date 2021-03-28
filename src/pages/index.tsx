import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./index.module.css";

export default function Home() {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.logoContainer}>
          <Logo size="large" />
        </div>
        {session && JSON.stringify(session.user.name)}
        {session ? (
          <Button onClick={signOut} title="Sign out" />
        ) : (
          <Button
            onClick={() => signIn("github")}
            title="Sign in with github"
          />
        )}
      </Layout>
    </>
  );
}
