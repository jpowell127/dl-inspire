import React from "react";
import UserProfilePreview from "../../src/components/user/UserProfilePreview";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

const user = {
  display_name: "test-user",
  username: "testuser",
  url: "https://google.com",
  id: 1,
  images: {}
};

test("UserProfilePreview renders correctly", () => {
  const component = shallow(<UserProfilePreview user={user} />);
  expect(toJson(component)).toMatchSnapshot();
});
