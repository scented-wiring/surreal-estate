import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const mockData = {
    _id: "000000",
    title: "2 Bedroom Flat",
    type: "Flat",
    bathrooms: "1",
    bedrooms: "2",
    price: "1000",
    city: "Manchester",
    email: "example@test.com",
    userID: "11111",
    onSaveProperty: jest.fn(),
  };

  it("renders a component", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a title", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("2 Bedroom Flat")).toHaveClass("property-title");
  });

  it("renders a type and city", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("Flat, Manchester")).toHaveClass("property-type-city");
  });

  it("renders a bathroom number", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("1")).toHaveClass("property-bathrooms");
  });

  it("renders a bedroom number", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("2")).toHaveClass("property-bedrooms");
  });

  it("renders a price", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("1000")).toHaveClass("property-price");
  });

  it("renders an email button", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("Email")).toHaveClass("button-text");
  });

  it("renders a save button if user is logged in", () => {
    const { getByText } = render(<PropertyCard {...mockData} />);

    expect(getByText("Save")).toHaveClass("button");
  });

  it("doesn't render a save button if user is logged out", () => {
    const { queryByText } = render(<PropertyCard userID="" />);

    expect(queryByText("Save")).not.toBeInTheDocument();
  });
});
