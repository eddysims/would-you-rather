import styles from "./ValidationMessage.module.css";

interface ValidationMessageProps {
  /**
   * The message to display
   */
  readonly message: string;
}

export function ValidationMessage({ message }: ValidationMessageProps) {
  return <div className={styles.validation}>{message}</div>;
}
