import React from "react";
import UserFollow from "../../src/components/user/UserFollow";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("UserFollow renders correctly", () => {
  const username = "a-r-t-e-m";
  const component = shallow(<UserFollow username={username} />);
  expect(toJson(component)).toMatchSnapshot();
});
