import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

it("displays an error message", () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
  expect(getByText(/Error/)).toHaveClass("alert-error");
  expect(asFragment()).toMatchSnapshot();
});

it("displays a success message", () => {
  const { getByText, asFragment } = render(
    <Alert message="Success!!!!" success />
  );

  expect(getByText(/Success/).textContent).toBe("Success!!!!");
  expect(getByText(/Success/)).toHaveClass("alert-success");
  expect(asFragment()).toMatchSnapshot();
});

it("does not render an error or success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});
