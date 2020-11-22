import React from "react";
import { render } from "@testing-library/react";
import FavouriteCard from "../components/FavouriteCard";

describe("FavouriteCard", () => {
  it("renders a component", () => {
    const { asFragment } = render(<FavouriteCard />);
    expect(asFragment).toMatchSnapshot();
  });
});
