import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Avatar } from ".";

afterEach(cleanup);

it("renders an Icon by default", () => {
  const { getByTestId } = render(<Avatar />);
  expect(getByTestId("icon-User")).toBeInstanceOf(SVGElement);
});

it("renders an aria-label by default", () => {
  const { getByLabelText } = render(<Avatar />);
  expect(getByLabelText("Current users avatar")).toBeInstanceOf(HTMLDivElement);
});

it("renders an aria-label with name when set", () => {
  const { getByLabelText } = render(<Avatar name="Eddy Sims" />);
  expect(getByLabelText("Avatar for user Eddy Sims")).toBeInstanceOf(
    HTMLDivElement
  );
});

it("only renders 1 initial with short name", () => {
  const { getByText } = render(<Avatar name="Eddy" />);
  expect(getByText("E")).toBeInstanceOf(HTMLDivElement);
});

it("renders 2 initial with normal name", () => {
  const { getByText } = render(<Avatar name="Eddy Sims" />);
  expect(getByText("ES")).toBeInstanceOf(HTMLDivElement);
});

it("renders first and last initial with longer name", () => {
  const { getByText } = render(<Avatar name="Eddy Darell Sims" />);
  expect(getByText("ES")).toBeInstanceOf(HTMLDivElement);
});

it("does not render name if imageUrl is set", () => {
  const { queryByText } = render(<Avatar imageUrl="foo" name="Eddy Sims" />);
  expect(queryByText("ES")).toBeNull();
});

it("renders a small icon if small", () => {
  const { getByTestId } = render(<Avatar size="small" />);

  expect(getByTestId("icon-User").getAttribute("height")).toBe("12");
});
