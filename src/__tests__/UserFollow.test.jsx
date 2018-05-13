import React from "react";
import UserFollow from "../components/user/UserFollow";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserFollow />", () => {
  it("renders correctly", () => {
    const username = "a-r-t-e-m";
    const wrapper = shallow(<UserFollow username={username} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("it calls getUserFollow twice when componentDidMount is called", () => {
    const username = "a-r-t-e-m";
    const wrapper = mount(<UserFollow username={username} />);
    const instance = wrapper.instance();
    const getUserFollowSpy = jest.spyOn(instance, "getUserFollow");

    instance.componentDidMount();

    expect(getUserFollowSpy).toHaveBeenCalledTimes(2);
    getUserFollowSpy.mockClear();
  });
});
