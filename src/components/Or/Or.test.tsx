import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Or } from ".";

afterEach(cleanup);

it("renders", () => {
  const { container } = render(<Or />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="or"
      >
        <svg
          data-testid="icon-ArrowDownLeft"
          fill="none"
          height="36"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="17"
            x2="7"
            y1="7"
            y2="17"
          />
          <polyline
            points="17 17 7 17 7 7"
          />
        </svg>
        <svg
          data-testid="icon-ArrowUpRight"
          fill="none"
          height="36"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="7"
            x2="17"
            y1="17"
            y2="7"
          />
          <polyline
            points="7 7 17 7 17 17"
          />
        </svg>
      </div>
    </div>
  `);
});
