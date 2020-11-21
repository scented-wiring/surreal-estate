import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

beforeAll(() => {
  const script = document.createElement("script");
  document.body.appendChild(script);
});

describe("App", () => {
  it("renders a component", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders a Navbar", () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const title = getByText("Surreal Estate");
    expect(title).toBeInTheDocument();
  });
});
