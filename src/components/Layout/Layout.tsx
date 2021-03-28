import { PropsWithChildren } from "react";

import { Navigation } from "@/components/Navigation";

import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
