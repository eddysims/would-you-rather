import NextLink from "next/link";

import styles from "./NavigationLink.module.css";

interface NavigationLinkProps {
  /**
   * The url where the component should link to.
   */
  readonly to: string;
  /**
   * The text that will appear within the navigation link
   */
  readonly title: string;
}

export function NavigationLink({ to, title }: NavigationLinkProps) {
  return (
    <NextLink href={to} passHref>
      <a className={styles.link}>{title}</a>
    </NextLink>
  );
}
