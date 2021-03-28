import React from "react";
import { cleanup, render } from "@testing-library/react";
import client, { Session } from "next-auth/client";
import { SignInModal } from ".";

jest.mock("next-auth/client");

afterEach(cleanup);

const titleString = "Sign in to submit a question";

it("renders the modal", () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "b", image: "c" },
  };
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const { getByText } = render(<SignInModal open onClose={jest.fn()} />);
  expect(getByText(titleString)).toBeInstanceOf(HTMLHeadingElement);
});

it("closes automatically if there is a session", () => {
  const mockSession: Session = {
    expires: "1",
    user: { email: "a", name: "b", image: "c" },
  };
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

  const closeHandler = jest.fn();

  render(<SignInModal open onClose={closeHandler} />);
  expect(closeHandler).toHaveBeenCalledTimes(1);
});
