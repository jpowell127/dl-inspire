import React from "react";
import Search from "../components/Search";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

const props = {
  getUsers: jest.fn(),
  handleSearchTermChange: jest.fn()
};

describe("<Search />", () => {
  it("renders correctly", () => {
    const component = shallow(<Search {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("it calls getUsers when search button is clicked", () => {
    const component = mount(<Search {...props} />);
    component
      .find("input")
      .simulate("change", { currentTarget: { value: "test" } });
    component.find("button").simulate("click");
    expect(props.getUsers).toHaveBeenCalled();
  });
  it("it calls getUsers when enter button is pressed", () => {
    const component = mount(<Search {...props} />);
    component
      .find("input")
      .simulate("change", { currentTarget: { value: "test" } });
    component.find("button").simulate("keypress", { key: "Enter" });
    expect(props.getUsers).toHaveBeenCalled();
  });
});
