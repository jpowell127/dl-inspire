import React from "react";
import MenuBar from "../components/MenuBar";
import SearchProps from "./mocks/mock.searchProps";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const props = SearchProps;

describe("<MenuBar />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MenuBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("contains correct header text", () => {
    const wrapper = mount(<MenuBar {...props} />);
    expect(wrapper.find("div.content").text()).toBe("Search");
  });
  it("contains a search input", () => {
    const wrapper = mount(<MenuBar {...props} />);
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
