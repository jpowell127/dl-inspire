import React from "react";
import UserFollow from "../components/user/UserFollow";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserFollow />", () => {
  it("renders correctly", () => {
    const username = "a-r-t-e-m";
    const component = shallow(<UserFollow username={username} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
