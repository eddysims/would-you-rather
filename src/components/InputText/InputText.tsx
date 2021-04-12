import { useState } from "react";
import classnames from "classnames";
import {
  RegisterOptions,
  useForm,
  Controller,
  useFormContext,
} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ValidationMessage } from "@/components/ValidationMessage";

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
  /**
   * initialValue to display in the input
   */
  readonly initialValue?: string;
}

export function InputText({
  label,
  name,
  validations,
  initialValue,
  onChange,
}: InputTextProps) {
  const [inputName] = useState(name || uuidv4());
  const { control } =
    useFormContext() !== null
      ? useFormContext()
      : useForm({ mode: "onTouched" });

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={inputName}>
          {label}
        </label>
      )}
      <Controller
        name={inputName}
        control={control}
        rules={validations}
        defaultValue={initialValue}
        render={({
          field: { onChange: contollerOnChange, onBlur, value },
          fieldState: { invalid, error },
        }) => {
          const inputClass = classnames(styles.input, {
            [styles.error]: invalid,
          });

          return (
            <>
              <input
                name={inputName}
                value={value || ""}
                onBlur={onBlur}
                type="text"
                className={inputClass}
                onChange={handleChange}
              />
              {error && (
                <div className={styles.validation}>
                  <ValidationMessage message={error.message} />
                </div>
              )}
            </>
          );

          function handleChange(event) {
            const newValue = event.target.value;

            contollerOnChange(newValue);

            if (onChange) {
              onChange(newValue);
            }
          }
        }}
      />
    </div>
  );
}
