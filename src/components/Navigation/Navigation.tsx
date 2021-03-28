import { XOR } from "ts-xor";
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
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.title}>
            {/* disabling prop spreading here as this is a very valid use case */}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <NavigationLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
