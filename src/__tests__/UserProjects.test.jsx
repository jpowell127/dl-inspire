import React from "react";
import UserProjects from "../components/user/UserProjects";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserProjects />", () => {
  it("renders correctly", () => {
    const userId = 1;
    const component = shallow(<UserProjects userId={userId} />);
    expect(component).toMatchSnapshot();
  });
});
