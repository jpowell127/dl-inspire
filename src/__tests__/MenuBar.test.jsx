import React from "react";
import MenuBar from "../components/MenuBar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("MenuBar renders correctly", () => {
  const component = shallow(
    <MenuBar getUsers={() => {}} handleSearchTermChange={() => {}} />
  );
  expect(toJson(component)).toMatchSnapshot();
});
