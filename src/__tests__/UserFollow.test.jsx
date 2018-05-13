import React from "react";
import UserFollow from "../components/user/UserFollow";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const username = "a-r-t-e-m";

describe("<UserFollow />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UserFollow username={username} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
