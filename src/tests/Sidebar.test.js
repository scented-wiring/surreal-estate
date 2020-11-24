import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders a search input", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("renders a search button", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("renders two titles", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(getAllByTestId("item-title")).toHaveLength(2);
  });

  it("renders six links", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(getAllByRole("link")).toHaveLength(6);
  });
});
