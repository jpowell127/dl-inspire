import React from "react";
import UserProjects from "../src/components/user/UserProjects";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("UserProjects renders correctly", () => {
  const userId = 1;
  const component = shallow(<UserProjects userId={userId} />);
  expect(component).toMatchSnapshot();
});
