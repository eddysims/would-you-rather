import NextLink from "next/link";
import { XOR } from "ts-xor";

import styles from "./NavigationLink.module.css";

interface NavigationLinkBaseProps {
  /**
   * The text that will appear within the navigation link.
   */
  readonly title: string;
}
interface NavigationLinkLinkProps extends NavigationLinkBaseProps {
  /**
   * The URL where the link should go to.
   */
  readonly to: string;
}

interface NavigationLinkActionProps extends NavigationLinkBaseProps {
  /**
   * An action to perform onClick if you are not sending to a URL.
   */
  onClick(): void;
}

type NavigationLinkProps = XOR<
  NavigationLinkLinkProps,
  NavigationLinkActionProps
>;

export function NavigationLink({ to, title, onClick }: NavigationLinkProps) {
  if (to) {
    return (
      <NextLink href={to} passHref>
        <a className={styles.link}>{title}</a>
      </NextLink>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={styles.link}>
      {title}
    </button>
  );

  function handleClick() {
    onClick();
  }
}
