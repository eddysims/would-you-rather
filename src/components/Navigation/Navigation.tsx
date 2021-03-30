import NextLink from "next/link";
import { XOR } from "ts-xor";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { NavigationLink } from "@/components/NavigationLink";

import styles from "./Navigation.module.css";

interface NavigatioBaseItem {
  readonly title: string;
}

interface NavigationLinkItem extends NavigatioBaseItem {
  readonly to: string;
}

interface NavigationActionItem extends NavigatioBaseItem {
  onClick(): void;
}

type NavigationItem = XOR<NavigationLinkItem, NavigationActionItem>;

interface NavigationProps {
  readonly items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.container}>
          <NextLink href="/" passHref>
            <a className={styles.logo}>
              <Logo size="tiny" variation="icon" />
            </a>
          </NextLink>

          <ul className={styles.list}>
            {items.map((item) => (
              <li className={styles.item} key={item.title}>
                {/* disabling prop spreading here as this is a very valid use case */}
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <NavigationLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
