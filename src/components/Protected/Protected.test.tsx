import React from "react";
import client, { Session } from "next-auth/client";
import { cleanup, render } from "@testing-library/react";
import { Protected } from ".";

jest.mock("next-auth/client");

afterEach(cleanup);

it("protects the content if there is no session", () => {
  const mockSession: Session = undefined;
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { getByText } = render(<Protected>Foo</Protected>);
  expect(getByText("Access Denied")).toBeInstanceOf(HTMLHeadingElement);
});

it("displays the content if there is a session", () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "b", image: "c" },
  };
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { getByText } = render(<Protected>Foo</Protected>);
  expect(getByText("Foo")).toBeInstanceOf(HTMLDivElement);
});

it("shows the spinner if loading", () => {
  (client.useSession as jest.Mock).mockReturnValueOnce([{}, true]);

  const { getByTestId } = render(<Protected>Foo</Protected>);
  expect(getByTestId("icon-Loader")).toBeInstanceOf(SVGElement);
});
