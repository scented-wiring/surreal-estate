import React from "react";
import { render } from "@testing-library/react";
import Favourites from "../components/Favourites";

describe("Favourites", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Favourites />);
    expect(asFragment).toMatchSnapshot();
  });

  it("displays a message if userID is null", () => {
    const { getByText } = render(<Favourites />);
    expect(getByText(/No favourites found/)).toBeInTheDocument();
  });
});
