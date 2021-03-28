import { PropsWithChildren } from "react";
import { useSession } from "next-auth/client";
import { Navigation } from "@/components/Navigation";

import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [session] = useSession();
  const navigationItems = getNavigationItems();

  return (
    <div>
      <Navigation items={navigationItems} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer>Footer</footer>
    </div>
  );

  function getNavigationItems() {
    const items = [];
    const dashboardUrl = "/dashboard";

    if (session) {
      items.push({
        title: "Dashboard",
        to: dashboardUrl,
      });
    }

    if (!session) {
      items.push({
        title: "Sign In",
        onClick: () => alert("Sign In"),
      });
    }

    items.push({
      title: "Submit A Question",
      to: session ? dashboardUrl : undefined,
      onClick: session ? undefined : () => alert("Submit a quesion"),
    });

    return items;
  }
}
