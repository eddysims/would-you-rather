import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ValidationMessage } from ".";

afterEach(cleanup);

it("renders a message", () => {
  const { container } = render(<ValidationMessage message="Foobot" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="validation"
      >
        Foobot
      </div>
    </div>
  `);
});
