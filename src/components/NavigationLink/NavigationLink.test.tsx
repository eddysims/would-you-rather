import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { NavigationLink } from ".";

afterEach(cleanup);

it("renders a link", () => {
  const { getByText } = render(<NavigationLink to="/" title="Foo" />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});

it("correctly sets the `href`", () => {
  const { getByText } = render(<NavigationLink to="/foo" title="Foo" />);
  const link = getByText("Foo");
  expect(link.getAttribute("href")).toBe("/foo");
});

it("handles the onClick when set", () => {
  const clickHandler = jest.fn();
  const { getByText } = render(
    <NavigationLink onClick={clickHandler} title="Foo" />
  );

  fireEvent.click(getByText("Foo"));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
