import React from "react";
import { act, cleanup, render, waitFor } from "@testing-library/react";
import { NumCounter } from ".";

afterEach(() => {
  act(() => jest.runAllTimers());
  cleanup();
});

jest.useFakeTimers();

it("does the count", async () => {
  const { getByText } = render(<NumCounter number={100} />);

  act(() => jest.runAllTimers());

  await waitFor(() => {
    expect(getByText("100")).toBeInstanceOf(HTMLDivElement);
  });
});
