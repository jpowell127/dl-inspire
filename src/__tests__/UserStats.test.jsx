import React from "react";
import UserStats from "../components/user/UserStats";
import MockStats from "./mocks/mock.stats";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserStats />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<UserStats stats={MockStats} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
  it("renders the correct stats", () => {
    const wrapper = mount(<UserStats stats={MockStats} />);
    expect(wrapper.props().stats).toBe(MockStats);
    wrapper.unmount();
  });
});
