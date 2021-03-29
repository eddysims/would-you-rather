import NextLink from "next/link";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";

import styles from "./AccessDenied.module.css";

export function AccessDenied() {
  return (
    <div className={styles.container}>
      <Heading>Access Denied</Heading>
      You must sign in to view this page.
      <NextLink href="/" passHref>
        <a className={styles.link}>
          <Icon icon="Home" />
          Go Home
        </a>
      </NextLink>
    </div>
  );
}
