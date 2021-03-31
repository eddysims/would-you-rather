import { useState, PropsWithChildren } from "react";
import { useSession, signOut } from "next-auth/client";
import { Navigation } from "@/components/Navigation";
import { SignInModal } from "@/components/SignInModal";

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [signInOpen, setSignInOpen] = useState<boolean>();
  const [session] = useSession();
  const navigationItems = getNavigationItems();

  return (
    <>
      <div>
        <Navigation items={navigationItems} />
        <main>{children}</main>
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
