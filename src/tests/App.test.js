import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders h2 element", () => {
  const { getByText } = render(<App />);
  const h2 = getByText("Surreal Estate");
  expect(h2).toBeInTheDocument();
});
