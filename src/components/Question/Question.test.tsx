import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Question, CREATE_QUESTION_MUTATION } from ".";

afterEach(async () => {
  // act(() => jest.runAllTimers());

  cleanup();
});

const longText =
  "I am a longer text than should be added into this box. What do you think would happen if I just kept on going?";

const user = {
  id: "1",
};

const mock = {
  request: {
    query: CREATE_QUESTION_MUTATION,
    variables: {
      uid: user.id,
      prefix: "Do this",
      suffix: "Do that",
    },
  },
  result: {
    data: {
      insert_question_one: {
        id: 10,
      },
    },
  },
};

it("shows an error when empty question submitted", async () => {
  const { getByText } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Question user={user} />
    </MockedProvider>
  );

  const button = getByText("Submit your question");
  fireEvent.click(button);

  await waitFor(() => {
    expect(getByText("You must enter a question prefix.")).toBeInstanceOf(
      HTMLDivElement
    );
    expect(getByText("You must enter a question suffix.")).toBeInstanceOf(
      HTMLDivElement
    );
  });
});

it("shows an error for longer text", async () => {
  const { getAllByRole, getByText } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Question user={user} />
    </MockedProvider>
  );

  const input = getAllByRole("textbox")[0];
  input.focus();
  fireEvent.change(input, { target: { value: longText } });
  input.blur();

  await waitFor(() => {
    expect(
      getByText(`${longText.length - 100} characters over limit`)
    ).toBeInstanceOf(HTMLDivElement);
  });
});

it("succeeds with a toast", async () => {
  const { getByText, getAllByRole } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Question user={user} />
    </MockedProvider>
  );

  const inputs = getAllByRole("textbox");

  inputs[0].focus();
  fireEvent.change(inputs[0], { target: { value: "Do this" } });
  inputs[0].blur();

  inputs[1].focus();
  fireEvent.change(inputs[1], { target: { value: "Do that" } });
  inputs[1].blur();

  fireEvent.click(getByText("Submit your question"));

  await waitFor(() => {
    expect(getByText(`Question successfully added`)).toBeInstanceOf(
      HTMLDivElement
    );
  });
});

it("throws an error when error happens", async () => {
  // @ts-expect-error Disabling, as we want to force an error
  mock.request.variables.id = 100;

  const { getByText, getAllByRole } = render(
    <MockedProvider addTypename={false} mocks={[mock]}>
      <Question user={user} />
    </MockedProvider>
  );

  const inputs = getAllByRole("textbox");

  inputs[0].focus();
  fireEvent.change(inputs[0], { target: { value: "Do this" } });
  inputs[0].blur();

  inputs[1].focus();
  fireEvent.change(inputs[1], { target: { value: "Do that" } });
  inputs[1].blur();

  fireEvent.click(getByText("Submit your question"));

  await waitFor(() => {
    expect(getByText(`Something went wrong, please try again`)).toBeInstanceOf(
      HTMLDivElement
    );
  });
});
