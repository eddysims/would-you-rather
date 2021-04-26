import { MutableRefObject, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { Or } from "@/components/Or";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Toast, ToastRef } from "@/components/Toast";

import { useFormState } from "@/hooks/useFormState";
import { questions } from "@/data/questions";
import {
  CreateQuestionMutation,
  CreateQuestionMutationVariables,
  QuestionDataFragment,
} from "@/types/graphql";
import { CREATE_QUESTION_MUTATION } from "./Question.gql";

import { Input } from "./Input";

import styles from "./Question.module.css";

interface QuestionProps {
  readonly user: QuestionDataFragment;
}

export function Question({ user }: QuestionProps) {
  const [placeholder] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [prefix, setPrefix] = useState<string>();
  const [suffix, setSuffix] = useState<string>();
  const [{ isValid }, setFormState] = useFormState();
  const [createQuestion, { loading }] = useMutation<
    CreateQuestionMutation,
    CreateQuestionMutationVariables
  >(CREATE_QUESTION_MUTATION);
  const toastRef = useRef() as MutableRefObject<ToastRef>;

  return (
    <>
      <Form onSubmit={handleSubmit} onStateChange={setFormState}>
        <div className={styles.question}>
          <div className={styles.questionInput}>
            <Input
              placeholder={placeholder.prefix}
              onChange={handlePrefixChange}
            />
          </div>
          <div className={styles.questionInput}>
            <Input
              variation="suffix"
              placeholder={placeholder.suffix}
              onChange={handleSuffixChange}
            />
          </div>
          <div className={styles.or}>
            <Or />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            title="Submit your question"
            disabled={!isValid}
            isSubmit
            loading={loading}
          />
        </div>
      </Form>
      <Toast ref={toastRef} />
    </>
  );

  function handlePrefixChange(val: string) {
    setPrefix(val);
  }

  function handleSuffixChange(val: string) {
    setSuffix(val);
  }

  async function handleSubmit() {
    try {
      await createQuestion({
        variables: {
          uid: user.id,
          prefix,
          suffix,
        },
      });

      toastRef.current.notify({
        status: "success",
        message: "Question successfully added",
      });

      setPrefix(undefined);
      setSuffix(undefined);
    } catch (err) {
      toastRef.current.notify({
        status: "error",
        message: "Something went wrong, please try again",
      });
    }
  }
}
