import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface FormProps {
  /**
   * Submit handler for when the form is successfully submitted.
   */
  onSubmit(): void;
}

export function Form({ onSubmit, children }: PropsWithChildren<FormProps>) {
  const methods = useForm({ mode: "onTouched" });

  return (
    /**
     * Disabling props spreading here as this is the reccommended way
     * to pass in the methods from React Hook Form.
     */
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );

  function submitHandler() {
    onSubmit();
  }
}
