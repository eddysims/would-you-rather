import { useState, PropsWithChildren } from "react";
import { useSession, signOut } from "next-auth/client";
import { Navigation } from "@/components/Navigation";
import { SignInModal } from "@/components/SignInModal";

import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [session] = useSession();
  const navigationItems = getNavigationItems();

  return (
    <>
      <div>
        <Navigation items={navigationItems} />
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
        <footer>Footer</footer>
      </div>
      <SignInModal open={signInOpen} onClose={handleCloseModal} />
    </>
  );

  function handleCloseModal() {
    setSignInOpen(false);
  }

  function handleOpenModal() {
    setSignInOpen(true);
  }

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
        onClick: handleOpenModal,
      });
    }

    items.push({
      title: "Submit A Question",
      to: session ? dashboardUrl : undefined,
      onClick: session ? undefined : handleOpenModal,
    });

    if (session) {
      items.push({
        title: "Sign out",
        onClick: signOut,
      });
    }

    return items;
  }
}
