import { PropsWithChildren } from "react";
import NextLink from "next/link";

import styles from "./Link.module.css";

interface LinkProps {
  /**
   * The url the link should direct to
   */
  readonly to: string;

  /**
   * Should this link open in a new tab
   */
  readonly external?: boolean;
}

export function Link({
  to,
  external = false,
  children,
}: PropsWithChildren<LinkProps>) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={styles.link}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={to} passHref>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
}
