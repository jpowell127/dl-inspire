import React from "react";
import UserWorkExperience from "../../src/components/user/UserWorkExperience";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("UserWorkExperience renders correctly", () => {
  const username = "a-r-t-e-m";
  const component = shallow(<UserWorkExperience username={username} />);
  expect(component).toMatchSnapshot();
});
