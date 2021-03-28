import React from "react";
import { render, cleanup } from "@testing-library/react";

import { Icon } from ".";

afterEach(cleanup);

it("renders the correct icon", () => {
  const { getByTestId } = render(<Icon icon="Coffee" />);

  expect(getByTestId("icon-Coffee")).toBeInstanceOf(SVGElement);
});
