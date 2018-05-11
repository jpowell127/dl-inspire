import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserStats from "../../src/components/user/UserStats";

test("UserStats renders correctly", () => {
  const stats = {
    followers: 1,
    following: 1,
    appreciations: 1,
    views: 1,
    comments: 1
  };

  const component = shallow(<UserStats stats={stats} />);
  expect(component).toMatchSnapshot();
});
