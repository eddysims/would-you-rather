import classnames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
  /**
   * The text to appear in the Button.
   * Title is used instead of children with the intention of
   * keeping the title short.
   */
  readonly title: string;
  /**
   * Indicates that the button is in a loading state.
   */
  readonly loading?: boolean;
  /**
   * Renders button as type="submit". To be used when using a
   * button to submit a form
   */
  readonly isSubmit?: boolean;
  /**
   * Click handler for the the button is clicked.
   */
  onClick(): void;
}

export function Button({ title, isSubmit, loading, onClick }: ButtonProps) {
  const buttonClass = classnames(styles.button, {
    [styles.loading]: loading,
  });
  const isDisabled = loading;

  return (
    <button
      className={buttonClass}
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {title}
    </button>
  );

  function handleClick() {
    onClick();
  }
}
