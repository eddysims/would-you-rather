import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Link } from ".";

afterEach(cleanup);

it("renders the link", () => {
  const { container } = render(<Link to="/foo">Foo</Link>);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="link"
        href="/foo"
      >
        Foo
      </a>
    </div>
  `);
});

it("creates an external link", () => {
  const { getByText } = render(
    <Link to="/foo" external>
      Foo
    </Link>
  );

  expect(getByText("Foo").getAttribute("target")).toBe("_blank");
});
