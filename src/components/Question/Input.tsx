import { createRef, useState } from "react";
import classnames from "classnames";
import { Controller, useFormContext } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ValidationMessage } from "@/components/ValidationMessage";

import styles from "./Question.module.css";

interface InputProps {
  readonly variation?: "prefix" | "suffix";
  readonly placeholder?: string;
  onChange(val: string | number): void;
}

export function Input({
  variation = "prefix",
  placeholder,
  onChange,
}: InputProps) {
  const [inputName] = useState(uuidv4());
  const { control } = useFormContext();
  const inputRef = createRef<HTMLTextAreaElement>();
  const maxInputLength = 100;
  const inputRules = {
    required: `You must enter a question ${variation}.`,
    maxLength: {
      value: maxInputLength,
      message: `Your ${variation} must not be longer then ${maxInputLength} characters.`,
    },
  };

  return (
    <Controller
      name={inputName}
      control={control}
      rules={inputRules}
      render={({
        field: { onChange: contollerOnChange, onBlur, value },
        fieldState: { error },
      }) => {
        const remaining = value
          ? maxInputLength - value.length
          : maxInputLength;

        const counterMessage =
          remaining >= 0
            ? `${remaining} characters remaining`
            : `${remaining * -1} characters over limit`;

        const questionClass = classnames(styles.container, {
          [styles.suffix]: variation === "suffix",
        });

        return (
          <>
            <div className={questionClass}>
              <textarea
                ref={inputRef}
                name={inputName}
                value={value || ""}
                onBlur={onBlur}
                className={styles.input}
                onChange={handleChange}
                placeholder={placeholder}
                rows={1}
              />
              <div className={styles.counter}>{counterMessage}</div>
            </div>
            {error && (
              <div className={styles.validation}>
                <ValidationMessage message={error.message} />
              </div>
            )}
          </>
        );

        function handleChange(event) {
          const newValue = event.target.value;

          if (inputRef && inputRef.current) {
            resizeInput(inputRef.current);
          }

          contollerOnChange(newValue);
          onChange(newValue);
        }
      }}
    />
  );

  function resizeInput(textArea: HTMLTextAreaElement) {
    /**
     * Disabling no-param-reassign here as this is something
     * that we want to do to mutate the DOM.
     */
    // eslint-disable-next-line no-param-reassign
    textArea.style.height = "auto";
    // eslint-disable-next-line no-param-reassign
    textArea.style.height = `${textArea.scrollHeight}px`;
  }
}
