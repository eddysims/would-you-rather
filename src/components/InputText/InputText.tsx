import { useState } from "react";
import classnames from "classnames";
import { RegisterOptions, useForm } from "react-hook-form";
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
  /**
   * Add validation rules. Based from [React Hook Forms](https://react-hook-form.com/).
   */
  readonly validations?: RegisterOptions;
}

export function InputText({
  label,
  name,
  validations,
  onChange,
}: InputTextProps) {
  const [inputName] = useState(name || uuidv4());
  const { register, formState } = useForm({ mode: "onTouched" });

  const error =
    inputName &&
    formState.errors[inputName] &&
    formState.errors[inputName].message;

  const inputClass = classnames(styles.input, {
    [styles.error]: error,
  });

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={inputName}>
          {label}
        </label>
      )}
      <input
        /**
         * Disabling prop spreading as it is required by
         * react hook forms.
         */
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(inputName, { ...validations })}
        className={inputClass}
        type="text"
        id={inputName}
        name={inputName}
        onChange={handleChange}
      />
      <div>{error}</div>
    </div>
  );

  function handleChange(event) {
    onChange(event.target.value);
  }
}
