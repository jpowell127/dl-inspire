import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserFollow from "../../src/components/user/UserFollow";

test("UserFollow renders correctly", () => {
  const username = "a-r-t-e-m";
  const component = shallow(<UserFollow username={username} />);
  expect(component).toMatchSnapshot();
});
