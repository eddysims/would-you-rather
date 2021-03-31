import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProfileHeader } from ".";

afterEach(cleanup);

const mockData = {
  name: "Foo Bar",
};

it("renders the avatar", () => {
  const { getByText } = render(<ProfileHeader data={mockData} />);
  expect(getByText("FB")).toBeInstanceOf(HTMLDivElement);
});
