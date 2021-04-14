import React, { MutableRefObject, useRef } from "react";
import {
  cleanup,
  render,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { Toast, ToastProps, ToastRef } from ".";

afterEach(() => {
  act(() => jest.runAllTimers());
  cleanup();
});

jest.useFakeTimers();

const success: ToastProps = {
  status: "success",
  message: "Success Message",
};

const error: ToastProps = {
  status: "error",
  message: "Error Message",
};

it("renders a toast", async () => {
  const { getByText } = render(<MockToast notification={success} />);
  fireEvent.click(getByText("Button"));

  await waitFor(() => {
    expect(getByText("Success Message")).toBeInstanceOf(HTMLDivElement);
  });
});

it("removes a toast after the timer completes", async () => {
  const { getByText, queryAllByText } = render(
    <MockToast notification={success} />
  );
  fireEvent.click(getByText("Button"));

  expect(setTimeout).toHaveBeenCalled();
  expect(queryAllByText("Success Message").length).toBe(1);

  act(() => jest.runAllTimers());

  await waitFor(() => {
    expect(queryAllByText("Success Message").length).toBe(0);
  });
});

it("renders an error toast", async () => {
  const { getByText } = render(<MockToast notification={error} />);
  fireEvent.click(getByText("Button"));

  await waitFor(() => {
    expect(getByText("Error Message").classList).toContain("error");
  });
});

it("renders the Check icon for success Toast", async () => {
  const { getByText, getByTestId } = render(
    <MockToast notification={success} />
  );
  fireEvent.click(getByText("Button"));

  await waitFor(() => {
    expect(getByTestId("icon-Check")).toBeInstanceOf(SVGElement);
  });
});

it("renders the X icon for success Toast", async () => {
  const { getByText, getByTestId } = render(<MockToast notification={error} />);
  fireEvent.click(getByText("Button"));

  await waitFor(() => {
    expect(getByTestId("icon-X")).toBeInstanceOf(SVGElement);
  });
});

interface MockToastProps {
  readonly notification: ToastProps;
}

function MockToast({ notification }: MockToastProps) {
  const toastRef = useRef() as MutableRefObject<ToastRef>;

  return (
    <>
      <button type="button" onClick={handleClick}>
        Button
      </button>
      <Toast ref={toastRef} />
    </>
  );

  function handleClick() {
    if (toastRef && toastRef.current !== undefined) {
      toastRef.current.notify(notification);
    }
  }
}
