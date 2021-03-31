import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Would You Rather</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <div className={styles.logoContainer}>
          <Logo size="large" />
        </div>
      </Layout>
    </>
  );
}
