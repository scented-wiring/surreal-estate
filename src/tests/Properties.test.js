import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Properties from "../components/Properties";

beforeAll(() => {
  const script = document.createElement("script");
  document.body.appendChild(script);
});

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders a SideBar", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>
    );
    expect(getByText("Filter by city")).toBeInTheDocument();
  });
});
