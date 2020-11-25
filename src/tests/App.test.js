import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

beforeAll(() => {
  const script = document.createElement("script");
  document.body.appendChild(script);
});

describe("App", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 3 routes", () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(wrapper.find(".navbar-link")).toHaveLength(3);
  });
});
