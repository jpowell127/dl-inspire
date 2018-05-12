import React from "react";
import UserStats from "../components/user/UserStats";
import MockStats from "./mocks/mock.stats";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserStats />", () => {
  it("renders correctly", () => {
    const component = mount(<UserStats stats={MockStats} />);
    expect(component.props().stats).toBe(MockStats);
    expect(toJson(component)).toMatchSnapshot();
    component.unmount();
  });
});
