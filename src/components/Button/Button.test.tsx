import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Button } from ".";

afterEach(cleanup);

it("renders a button", () => {
  const { getByText } = render(<Button title="Foo" onClick={jest.fn()} />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLButtonElement);
});

it("calls onClick handler", () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button title="Foo" onClick={clickHandler} />);

  fireEvent.click(getByText("Foo"));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it("should have the loading class if loading", () => {
  const { getByText } = render(
    <Button title="Foo" loading onClick={jest.fn()} />
  );

  expect(getByText("Foo").classList).toContain("loading");
});

it("should be disabled if loading", () => {
  const { getByText } = render(
    <Button title="Foo" loading onClick={jest.fn()} />
  );

  expect(getByText("Foo")).toBeDisabled();
});

it("should render a type button by default", () => {
  const { getByText } = render(<Button title="Foo" onClick={jest.fn()} />);
  expect(getByText("Foo").getAttribute("type")).toBe("button");
});

it("should render a type submit when isSubmit is set", () => {
  const { getByText } = render(<Button title="Foo" isSubmit />);
  expect(getByText("Foo").getAttribute("type")).toBe("submit");
});

it("should be disabled if set", () => {
  const { getByText } = render(
    <Button title="Foo" disabled onClick={jest.fn()} />
  );

  expect(getByText("Foo")).toBeDisabled();
});

it("should not be clickable if disabled", () => {
  const clickHandler = jest.fn();
  const { getByText } = render(
    <Button title="Foo" disabled onClick={clickHandler} />
  );

  expect(getByText("Foo")).toBeDisabled();
  expect(clickHandler).not.toHaveBeenCalled();
});
