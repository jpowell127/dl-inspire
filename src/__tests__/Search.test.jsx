import React from "react";
import Search from "../components/Search";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("Search renders correctly", () => {
  const props = {
    getUsers: jest.fn(),
    handleSearchTermChange: jest.fn()
  };
  const component = shallow(<Search {...props} />);
  expect(toJson(component)).toMatchSnapshot();
});
