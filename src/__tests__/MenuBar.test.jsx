import React from "react";
import MenuBar from "../components/MenuBar";
import SearchProps from "./mocks/mock.searchProps";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<MenuBar />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MenuBar {...SearchProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("contains correct header text", () => {
    const wrapper = mount(<MenuBar {...SearchProps} />);
    expect(wrapper.find("div.content").text()).toBe("Search");
    wrapper.unmount();
  });
  it("contains a search input", () => {
    const wrapper = mount(<MenuBar {...SearchProps} />);
    expect(wrapper.find("input").exists()).toBe(true);
    wrapper.unmount();
  });
});
