import React from "react";
import { render, cleanup } from "@testing-library/react";
import { useRouter } from "next/router";
import { Navigation } from ".";

jest.mock("next/router");

afterEach(cleanup);

const items = [
  {
    title: "Foo",
    to: "/foo",
  },
];

it("renders the links", () => {
  (useRouter as jest.Mock).mockReturnValueOnce({});
  const { getByText } = render(<Navigation items={items} />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});
