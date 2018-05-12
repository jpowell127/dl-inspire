import React from "react";
import MenuBar from "../components/MenuBar";
import SearchProps from "./mocks/mock.searchProps";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const props = SearchProps;

describe("<MenuBar />", () => {
  it("renders correctly", () => {
    const component = shallow(<MenuBar {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it("contains correct header text", () => {
    const component = mount(<MenuBar {...props} />);
    expect(component.find("div.content").text()).toBe("Search");
  });
  it("contains a search input", () => {
    const component = mount(<MenuBar {...props} />);
    expect(component.find("input").exists()).toBe(true);
  });
});
