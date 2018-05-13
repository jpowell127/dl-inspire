import React from "react";
import UserProfileModal from "../components/user/UserProfileModal";
import MockUser from "./mocks/mock.user";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("<UserProfileModal />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<UserProfileModal user={MockUser} />);
    expect(wrapper.props().user).toBe(MockUser);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
