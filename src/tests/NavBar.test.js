import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

beforeAll(() => {
  const script = document.createElement("script");
  document.body.appendChild(script);
});

describe("Navbar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders the page title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Surreal Estate")).toBeInTheDocument();
  });

  it("renders 3 links", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getAllByRole("link")).toHaveLength(3);
  });

  it("renders a button", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getAllByRole("button")).toHaveLength(1);
  });

  it("renders a log in message if user logged out", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Login with facebook")).toBeInTheDocument();
  });

  it("renders a sign out message if user is logged in", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar userID="9999" />
      </MemoryRouter>
    );
    expect(getByText("Sign out from facebook")).toBeInTheDocument();
  });
});
