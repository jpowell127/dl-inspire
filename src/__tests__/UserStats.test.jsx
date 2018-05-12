import React from "react";
import UserStats from "../components/user/UserStats";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("UserStats renders correctly", () => {
  const stats = {
    followers: 1,
    following: 1,
    appreciations: 1,
    views: 1,
    comments: 1
  };

  const component = shallow(<UserStats stats={stats} />);
  expect(toJson(component)).toMatchSnapshot();
});
