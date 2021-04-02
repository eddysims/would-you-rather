import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Icon } from ".";

afterEach(cleanup);

it("renders the correct icon", () => {
  const { getByTestId } = render(<Icon icon="Coffee" />);

  expect(getByTestId("icon-Coffee")).toBeInstanceOf(SVGElement);
});

it("renders a small icon", () => {
  const { getByTestId } = render(<Icon icon="Coffee" size="tiny" />);

  expect(getByTestId("icon-Coffee").getAttribute("height")).toBe("12");
});
