import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders a component", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment).toMatchSnapshot();
  });

  it("renders an AddProperty form", () => {
    const { getByTestId } = render(<AddProperty />);
    expect(getByTestId("add-property-form")).toBeInTheDocument();
  });

  it("renders 2 textboxes", () => {
    const { getAllByRole } = render(<AddProperty />);
    expect(getAllByRole("textbox")).toHaveLength(2);
  });

  it("renders 4 comboboxes", () => {
    const { getAllByRole } = render(<AddProperty />);
    expect(getAllByRole("combobox")).toHaveLength(4);
  });

  it("renders 1 spinbutton", () => {
    const { getAllByRole } = render(<AddProperty />);
    expect(getAllByRole("spinbutton")).toHaveLength(1);
  });

  it("renders 1 button", () => {
    const { getAllByRole } = render(<AddProperty />);
    expect(getAllByRole("button")).toHaveLength(1);
  });
});
