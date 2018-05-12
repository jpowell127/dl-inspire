import React from "react";
import MenuBar from "../components/MenuBar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<MenuBar />", () => {
  it("renders correctly", () => {
    const props = {
      getUsers: jest.fn(),
      handleSearchTermChange: jest.fn()
    };
    const component = shallow(<MenuBar {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
