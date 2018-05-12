import React from "react";
import UserWorkExperience from "../components/user/UserWorkExperience";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserWorkExperience />", () => {
  it("renders correctly", () => {
    const username = "a-r-t-e-m";
    const component = shallow(<UserWorkExperience username={username} />);
    expect(component).toMatchSnapshot();
  });
});
