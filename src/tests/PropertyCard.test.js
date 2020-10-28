import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

test("renders a title", () => {
  const { getByText } = render(<PropertyCard title="test" />);
  const title = getByText("test");
  expect(title).toBeInTheDocument();
});

test("renders a type", () => {
  const { getByText } = render(<PropertyCard type="flat" />);
  const type = getByText("flat");
  expect(type).toBeInTheDocument();
});

test("renders bathrooms", () => {
  const { getByText } = render(<PropertyCard bathrooms={2} />);
  const bathrooms = getByText("2");
  expect(bathrooms).toBeInTheDocument();
});

test("renders bedrooms", () => {
  const { getByText } = render(<PropertyCard bedrooms={4} />);
  const bedrooms = getByText("4");
  expect(bedrooms).toBeInTheDocument();
});

test("renders price", () => {
  const { getByText } = render(<PropertyCard price={40000} />);
  const price = getByText("40000");
  expect(price).toBeInTheDocument();
});

test("renders city", () => {
  const { getByText } = render(<PropertyCard city="Manchester" />);
  const city = getByText("Manchester");
  expect(city).toBeInTheDocument();
});

test("renders email", () => {
  const { getByText } = render(<PropertyCard email="hello@internet.com" />);
  const email = getByText("hello@internet.com");
  expect(email).toBeInTheDocument();
});
