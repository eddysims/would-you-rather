import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Navigation } from ".";

afterEach(cleanup);

it("renders the links", () => {
  const { container } = render(<Navigation />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <nav
        class="navigation"
      >
        <ul
          class="list"
        >
          <li
            class="item"
          >
            <a
              class="link"
              href="/signin"
            >
              Sign In
            </a>
          </li>
          <li
            class="item"
          >
            <a
              class="link"
              href="/signin"
            >
              Submit a question
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `);
});
