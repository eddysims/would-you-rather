import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { Logo } from "@/components/Logo";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className={styles.logoContainer}>
        <Logo size="large" />
      </div>
    </>
  );
}
