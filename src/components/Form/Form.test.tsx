import React from "react";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { Form } from ".";

afterEach(cleanup);

it("renders the children of the form", async () => {
  const { getByRole } = render(<MockForm onSubmit={jest.fn()} />);
  await waitFor(() => {
    expect(getByRole("textbox")).toBeInstanceOf(HTMLInputElement);
  });
});

it("displays validation messages when invalid form is submited", async () => {
  const { getByText } = render(<MockForm onSubmit={jest.fn()} />);

  fireEvent.click(getByText("Submit"));

  await waitFor(() => {
    expect(getByText("Validation Message")).toBeInstanceOf(HTMLDivElement);
  });
});

it("calls the submit handler when the form is submitted", async () => {
  const submitHandler = jest.fn();
  const { getByText, getByRole } = render(
    <MockForm onSubmit={submitHandler} />
  );

  const input = getByRole("textbox");
  input.focus();
  fireEvent.change(input, { target: { value: "Foo" } });
  input.blur();

  fireEvent.click(getByText("Submit"));

  await waitFor(() => {
    expect(submitHandler).toHaveBeenCalledTimes(1);
  });
});

it("updates formState when formState is changed", async () => {
  const onStateChangeHandler = jest.fn();
  const { getByText, getByRole } = render(
    <MockForm onSubmit={jest.fn()} onStateChange={onStateChangeHandler} />
  );

  const input = getByRole("textbox");
  input.focus();
  fireEvent.change(input, { target: { value: "Foo" } });
  input.blur();

  fireEvent.click(getByText("Submit"));

  await waitFor(() => {
    expect(onStateChangeHandler).toHaveBeenCalledWith({
      isDirty: true,
      isValid: true,
    });
  });
});

interface MockFormProps {
  onSubmit(): void;
  onStateChange?(): void;
}

function MockForm({ onSubmit, onStateChange }: MockFormProps) {
  return (
    <Form onSubmit={onSubmit} onStateChange={onStateChange}>
      <InputText label="Foo" validations={{ required: "Validation Message" }} />
      <Button title="Submit" isSubmit />
    </Form>
  );
}
