import React from "react";
import UserProfilePreview from "../components/user/UserProfilePreview";
import MockUser from "./mocks/mock.user";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

test("<UserProfilePreview/> renders correctly", () => {
  const component = mount(<UserProfilePreview user={MockUser} />);
  expect(component.props().user).toBe(MockUser);
  expect(toJson(component)).toMatchSnapshot();
  component.unmount();
});
