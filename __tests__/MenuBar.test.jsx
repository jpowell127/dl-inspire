import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import MenuBar from "../src/components/MenuBar";

test("MenuBar renders correctly", () => {
  const component = shallow(
    <MenuBar getUsers={() => {}} handleSearchTermChange={() => {}} />
  );
  expect(component).toMatchSnapshot();
});
