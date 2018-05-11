import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Search from "../src/components/Search";

test("Search renders correctly", () => {
  const component = shallow(
    <Search getUsers={() => {}} handleSearchTermChange={() => {}} />
  );
  expect(component).toMatchSnapshot();
});
