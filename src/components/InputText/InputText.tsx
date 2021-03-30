import { v4 as uuidv4 } from "uuid";

import styles from "./InputText.module.css";

interface InputTextProps {
  /**
   * The label to be associated with the input
   */
  readonly label?: string;
  /**
   * the `name` can be passed into the input. Will be random if
   * no name is passed in.
   */
  readonly name?: string;
  /**
   * Change handler will return a new value.
   */
  onChange?(val: string | number): void;
}

export function InputText({ label, name, onChange }: InputTextProps) {
  const inputName = name || uuidv4();

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={inputName}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type="text"
        id={inputName}
        name={inputName}
        onChange={handleChange}
      />
    </div>
  );

  function handleChange(event) {
    onChange(event.target.value);
  }
}
