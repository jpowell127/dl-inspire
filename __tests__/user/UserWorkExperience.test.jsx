import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserWorkExperience from "../../src/components/user/UserWorkExperience";

test("UserWorkExperience renders correctly", () => {
  const username = "a-r-t-e-m";
  const component = shallow(<UserWorkExperience username={username} />);
  expect(component).toMatchSnapshot();
});
