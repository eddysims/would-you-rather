import { createRef, useState } from "react";
import classnames from "classnames";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ValidationMessage } from "@/components/ValidationMessage";
import { questions } from "@/data/questions";

import styles from "./QuestionInput.module.css";

interface QuestionInputProps {
  /**
   * Change handler will return a new value.
   */
  onChange(val: string | number): void;
  /**
   * initialValue to display in the input
   */
  readonly initialValue?: string;
  readonly variation?: "prefix" | "suffix";
}

export function QuestionInput({
  initialValue,
  variation = "prefix",
  onChange,
}: QuestionInputProps) {
  const [placeholder] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [inputName] = useState(uuidv4());
  const { control } =
    useFormContext() !== null
      ? useFormContext()
      : useForm({ mode: "onTouched" });

  return (
    <div>
      <Controller
        name={inputName}
        control={control}
        rules={{
          required: `You must enter a ${variation}.`,
          maxLength: {
            value: 100,
            message: "Your option must not be longer then 100 characters.",
          },
        }}
        defaultValue={initialValue}
        render={({
          field: { onChange: contollerOnChange, onBlur, value },
          fieldState: { error },
        }) => {
          const inputRef = createRef<HTMLTextAreaElement>();
          const maxLength = 100;
          const remaining = value ? maxLength - value.length : maxLength;

          const inputMessage =
            remaining >= 0
              ? `${remaining} characters remaining`
              : `${remaining * -1} characters over limit`;

          const questionClass = classnames(styles.question, {
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
                  placeholder={placeholder[variation]}
                  rows={1}
                />
                <div className={styles.message}>{inputMessage}</div>
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

            contollerOnChange(newValue);

            if (onChange) {
              onChange(newValue);
            }

            if (inputRef && inputRef.current) {
              resizeInput(inputRef.current);
            }
          }

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
        }}
      />
    </div>
  );
}
