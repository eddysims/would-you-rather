import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Divider } from ".";

afterEach(cleanup);

it("renders a Divider", () => {
  const { container } = render(<Divider />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <hr
        class="divider"
      />
    </div>
  `);
});
