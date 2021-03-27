import React from "react";
import { render, cleanup } from "@testing-library/react";
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
