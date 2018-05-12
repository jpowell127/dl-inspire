import React from "react";
import UserProjects from "../../src/components/user/UserProjects";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("UserProjects renders correctly", () => {
  const userId = 1;
  const component = shallow(<UserProjects userId={userId} />);
  expect(component).toMatchSnapshot();
});
