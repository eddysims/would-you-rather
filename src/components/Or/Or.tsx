import { Icon } from "@/components/Icon";

import styles from "./Or.module.css";

export function Or() {
  return (
    <div className={styles.or}>
      <Icon icon="ArrowDownLeft" size="large" />
      <Icon icon="ArrowUpRight" size="large" />
    </div>
  );
}
