import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Navigation } from ".";

afterEach(cleanup);

const items = [
  {
    title: "Foo",
    to: "/foo",
  },
];

it("renders the links", () => {
  const { getByText } = render(<Navigation items={items} />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});
