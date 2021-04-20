import React from "react";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { QuestionInput } from ".";

afterEach(cleanup);

const longtext =
  "this is some text that is far to long, well not really far to long but instead just a little bit to long";

it("calls the onChange handler when changed", () => {
  const changeHandler = jest.fn();
  const { getByRole } = render(<QuestionInput onChange={changeHandler} />);

  const input = getByRole("textbox");

  fireEvent.input(input, { target: { value: "Hello" } });
  expect(changeHandler).toBeCalledWith("Hello");
});

it("updates the counter when input is changed", () => {
  const { getByRole, getByText } = render(
    <QuestionInput onChange={jest.fn()} />
  );

  const input = getByRole("textbox");

  fireEvent.input(input, { target: { value: "Hello" } });
  expect(getByText("95 characters remaining")).toBeInstanceOf(HTMLDivElement);
});

it("updates the counter when text is over the limit", () => {
  const { getByRole, getByText } = render(
    <QuestionInput onChange={jest.fn()} />
  );

  const input = getByRole("textbox");

  fireEvent.input(input, { target: { value: longtext } });
  expect(getByText("4 characters over limit")).toBeInstanceOf(HTMLDivElement);
});

it("shows a validation message that the field is required", async () => {
  const { getByRole, getByText } = render(
    <QuestionInput onChange={jest.fn()} />
  );

  const input = getByRole("textbox");
  input.focus();
  input.blur();

  await waitFor(() => {
    expect(getByText("You must enter a prefix.")).toBeInstanceOf(
      HTMLDivElement
    );
  });
});

it("shows a validation message that the value is to long", async () => {
  const { getByRole, getByText } = render(
    <QuestionInput onChange={jest.fn()} />
  );

  const input = getByRole("textbox");
  input.focus();
  fireEvent.input(input, { target: { value: longtext } });
  input.blur();

  await waitFor(() => {
    expect(
      getByText("Your option must not be longer then 100 characters.")
    ).toBeInstanceOf(HTMLDivElement);
  });
});

it("has placeholder text", () => {
  const { getByRole } = render(<QuestionInput onChange={jest.fn()} />);

  const input = getByRole("textbox");

  expect(input.getAttribute("placeholder")).not.toBe("");
});
