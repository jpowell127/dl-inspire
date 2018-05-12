import React from "react";
import MenuBar from "../src/components/MenuBar";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("MenuBar renders correctly", () => {
  const component = shallow(
    <MenuBar getUsers={() => {}} handleSearchTermChange={() => {}} />
  );
  expect(toJson(component)).toMatchSnapshot();
});
