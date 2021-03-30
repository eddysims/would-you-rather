import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { NavigationLink } from ".";

jest.mock("next/router");

// it("protects the content if there is no session", () => {
//   const mockSession: Session = undefined;
//   (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

//   const { getByText } = render(<Protected>Foo</Protected>);
//   expect(getByText("Access Denied")).toBeInstanceOf(HTMLHeadingElement);
// });

afterEach(cleanup);

it("renders a link", () => {
  (useRouter as jest.Mock).mockReturnValueOnce({});
  const { getByText } = render(<NavigationLink to="/" title="Foo" />);
  expect(getByText("Foo")).toBeInstanceOf(HTMLAnchorElement);
});

it("correctly sets the `href`", () => {
  (useRouter as jest.Mock).mockReturnValueOnce({});
  const { getByText } = render(<NavigationLink to="/foo" title="Foo" />);
  const link = getByText("Foo");
  expect(link.getAttribute("href")).toBe("/foo");
});

it("handles the onClick when set", () => {
  (useRouter as jest.Mock).mockReturnValueOnce({});
  const clickHandler = jest.fn();
  const { getByText } = render(
    <NavigationLink onClick={clickHandler} title="Foo" />
  );

  fireEvent.click(getByText("Foo"));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it("has the active class when active", () => {
  (useRouter as jest.Mock).mockReturnValueOnce({
    pathname: "/foo",
  });
  const { getByText } = render(<NavigationLink title="Foo" to="/foo" />);

  expect(getByText("Foo").classList).toContain("active");
});
