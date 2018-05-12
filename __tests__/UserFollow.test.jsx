import React from "react";
import UserFollow from "../src/components/user/UserFollow";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("UserFollow renders correctly", () => {
  const username = "a-r-t-e-m";
  const component = shallow(<UserFollow username={username} />);
  expect(toJson(component)).toMatchSnapshot();
});
