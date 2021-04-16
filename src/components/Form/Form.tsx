import { PropsWithChildren, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface FormProps {
  /**
   * Submit handler for when the form is successfully submitted.
   */
  onSubmit(): void;
  /**
   * callback for when the state of the form changes
   */
  onStateChange?(formState: { isDirty: boolean; isValid: boolean }): void;
}

export function Form({
  onSubmit,
  onStateChange,
  children,
}: PropsWithChildren<FormProps>) {
  const methods = useForm({ mode: "onTouched" });
  const {
    formState: { isDirty, isValid },
  } = methods;

  useEffect(() => {
    if (onStateChange) {
      onStateChange({ isDirty, isValid });
    }
  }, [isDirty, isValid]);

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
