import React from "react";
import UserStats from "../../src/components/user/UserStats";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

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
