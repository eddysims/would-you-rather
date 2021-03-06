import { useState, PropsWithChildren } from "react";
import { useSession, signOut } from "next-auth/client";
import { Navigation } from "@/components/Navigation";
import { SignInModal } from "@/components/SignInModal";
import { Footer } from "@/components/Footer";

import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [session] = useSession();
  const navigationItems = getNavigationItems();

  return (
    <>
      <div className={styles.layout}>
        <Navigation items={navigationItems} />
        <main className={styles.main}>{children}</main>
        <Footer />
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

    if (session) {
      items.push({
        title: "Sign out",
        onClick: () =>
          signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}` }),
      });
    }

    return items;
  }
}
