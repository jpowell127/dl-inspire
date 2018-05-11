import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserProjects from "../../src/components/user/UserProjects";

test("UserProjects renders correctly", () => {
  const userId = 1;
  const component = shallow(<UserProjects userId={userId} />);
  expect(component).toMatchSnapshot();
});
