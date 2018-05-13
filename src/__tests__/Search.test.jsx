import React from "react";
import Search from "../components/Search";
import SearchProps from "./mocks/mock.searchProps";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<Search />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<Search {...SearchProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("it calls getUsers when search button is clicked", () => {
    const wrapper = mount(<Search {...SearchProps} />);
    wrapper
      .find("input")
      .simulate("change", { currentTarget: { value: "test" } });
    wrapper.find("button").simulate("click");
    expect(SearchProps.getUsers).toHaveBeenCalled();
    wrapper.unmount();
  });
  it("it calls getUsers when enter button is pressed", () => {
    const wrapper = mount(<Search {...SearchProps} />);
    wrapper
      .find("input")
      .simulate("change", { currentTarget: { value: "test" } });
    wrapper.find("button").simulate("keypress", { key: "Enter" });
    expect(SearchProps.getUsers).toHaveBeenCalled();
    wrapper.unmount();
  });
});
