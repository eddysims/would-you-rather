import React from "react";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { Form } from ".";

afterEach(cleanup);

it("renders the children of the form", () => {
  const { getByRole } = render(<MockForm onSubmit={jest.fn()} />);
  expect(getByRole("textbox")).toBeInstanceOf(HTMLInputElement);
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

interface MockFormProps {
  onSubmit(): void;
}

function MockForm({ onSubmit }: MockFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <InputText label="Foo" validations={{ required: "Validation Message" }} />
      <Button title="Submit" isSubmit />
    </Form>
  );
}
