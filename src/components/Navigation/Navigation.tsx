import { NavigationLink } from "@/components/NavigationLink";

import styles from "./Navigation.module.css";

export function Navigation() {
  const navItems = [
    {
      to: "/signin",
      title: "Sign In",
    },
    {
      to: "/signin",
      title: "Submit a question",
    },
  ];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li className={styles.item} key={item.title}>
            <NavigationLink to={item.to} title={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
