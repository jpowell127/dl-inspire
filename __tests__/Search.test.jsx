import React from "react";
import Search from "../src/components/Search";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("Search renders correctly", () => {
  const component = shallow(
    <Search getUsers={() => {}} handleSearchTermChange={() => {}} />
  );
  expect(toJson(component)).toMatchSnapshot();
});
