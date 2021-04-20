import React from "react";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Profile, UPDATE_USER_PROFILE } from ".";

afterEach(cleanup);

const user = {
  id: "1",
  name: "Eddy",
  nickname: "edee",
  provider: "github",
  avatarUrl: "path/to/image",
};

const mock = {
  request: {
    query: UPDATE_USER_PROFILE,
    variables: {
      id: "1",
      name: "Foo",
      nickname: "edee",
    },
  },
  result: {
    data: {
      update_users: {
        returning: [
          {
            id: "1",
          },
        ],
      },
    },
  },
};

it("renders the github Icon when set", () => {
  const { getByTestId } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );
  expect(getByTestId("icon-Octocat")).toBeInstanceOf(SVGElement);
});

it("renders the google Icon when set", () => {
  user.provider = "google";

  const { getByTestId } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );
  expect(getByTestId("icon-Google")).toBeInstanceOf(SVGElement);
});

it("has a disabled Button to start so that a user cant click over and over", () => {
  const { getByText } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );

  expect(getByText("Update Your Profile")).toBeDisabled();
});

it("displays a success message when mutation runs", async () => {
  const { getByText, getAllByRole } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );

  const input = getAllByRole("textbox")[0];
  input.focus();
  fireEvent.change(input, { target: { value: "Foo" } });
  input.blur();

  fireEvent.click(getByText("Update Your Profile"));

  await waitFor(() => {
    expect(getByText("Profile successfully updated.")).toBeInstanceOf(
      HTMLDivElement
    );
  });
});

it("throws an error when no user is returned", async () => {
  mock.result.data.update_users.returning = [];
  const { getByText, getAllByRole } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );

  const input = getAllByRole("textbox")[0];
  input.focus();
  fireEvent.change(input, { target: { value: "Foo" } });
  input.blur();

  fireEvent.click(getByText("Update Your Profile"));

  await waitFor(() => {
    expect(getByText("Something went wrong.")).toBeInstanceOf(HTMLDivElement);
  });
});

it("throws an error if the mutation is borked", async () => {
  user.id = "2";
  const { getByText, getAllByRole } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Profile user={user} />
    </MockedProvider>
  );

  const input = getAllByRole("textbox")[0];
  input.focus();
  fireEvent.change(input, { target: { value: "Foo" } });
  input.blur();

  fireEvent.click(getByText("Update Your Profile"));

  await waitFor(() => {
    expect(getByText("Something went wrong, please try again.")).toBeInstanceOf(
      HTMLDivElement
    );
  });
});
