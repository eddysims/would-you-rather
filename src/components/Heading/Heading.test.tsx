import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Heading } from ".";

afterEach(cleanup);

it("renders an h2 by default", () => {
  const { container } = render(<Heading>Foo</Heading>);
  const heading = container.querySelector("h2");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h1 when set", () => {
  const { container } = render(<Heading as="h1">Foo</Heading>);
  const heading = container.querySelector("h1");

  expect(heading).toBeInstanceOf(HTMLHeadingElement);
});
