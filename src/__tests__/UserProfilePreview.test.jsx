import React from "react";
import UserProfilePreview from "../components/user/UserProfilePreview";
import MockUser from "./mocks/mock.user";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserProfilePreview />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<UserProfilePreview user={MockUser} />);
    expect(wrapper.props().user).toBe(MockUser);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
