import styles from "./Button.module.css";

interface ButtonProps {
  /**
   * The text to appear in the Button.
   * Title is used instead of children with the intention of
   * keeping the title short.
   */
  readonly title: string;
  /**
   * Click handler for the the button is clicked.
   */
  onClick(): void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {title}
    </button>
  );

  function handleClick() {
    onClick();
  }
}
