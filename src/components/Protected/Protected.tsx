import { PropsWithChildren } from "react";
import { useSession } from "next-auth/client";
import { Icon } from "@/components/Icon";
import { AccessDenied } from "@/components/AccessDenied";

export function Protected({ children }: PropsWithChildren<unknown>) {
  const [session, loading] = useSession();

  console.log("LOADING", loading);

  if (loading) {
    return <Icon icon="Loader" />;
  }

  if (!session) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}
