import classnames from "classnames";
import { XOR } from "ts-xor";
import styles from "./Button.module.css";

interface ButtonBaseProps {
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
   * Indicates if the button is disabled
   */
  readonly disabled?: boolean;
}

interface ButtonTypeButtonProps extends ButtonBaseProps {
  /**
   * Click handler for the the button is clicked.
   */
  onClick(): void;
}

interface ButtonTypeSubmitProps extends ButtonBaseProps {
  /**
   * Renders button as type="submit". To be used when using a
   * button to submit a form
   */
  readonly isSubmit: boolean;
}

type ButtonProps = XOR<ButtonTypeButtonProps, ButtonTypeSubmitProps>;

export function Button({
  title,
  isSubmit,
  loading,
  disabled,
  onClick,
}: ButtonProps) {
  const buttonClass = classnames(styles.button, {
    [styles.loading]: loading,
    [styles.disabled]: disabled,
  });
  const isDisabled = loading || disabled;

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
    if (onClick) {
      onClick();
    }
  }
}
