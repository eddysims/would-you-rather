import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { InputText } from ".";

afterEach(cleanup);

it("calls the change handler when typing", () => {
  const changeHandler = jest.fn();
  const { getByRole } = render(<InputText onChange={changeHandler} />);

  fireEvent.input(getByRole("textbox"), { target: { value: "Hello" } });
  expect(changeHandler).toBeCalledWith("Hello");
});

it("always has a name attribute", () => {
  const { getByRole } = render(<InputText onChange={jest.fn()} />);
  expect(getByRole("textbox")).toHaveAttribute("name");
});

it("has proper name attribute when set", () => {
  const { getByRole } = render(<InputText onChange={jest.fn()} name="Eddy" />);
  expect(getByRole("textbox").getAttribute("name")).toBe("Eddy");
});
