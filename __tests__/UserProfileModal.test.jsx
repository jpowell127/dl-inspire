import React from "react";
import UserProfileModal from "../src/components/user/UserProfileModal";
import MockUser from "./mocks/mock.user";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

test("<UserProfileModal/> renders correctly", () => {
  const component = mount(<UserProfileModal user={MockUser} />);
  expect(component.props().user).toBe(MockUser);
  expect(toJson(component)).toMatchSnapshot();
  component.unmount();
});
