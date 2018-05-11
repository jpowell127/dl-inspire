import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserProfilePreview from "../../src/components/user/UserProfilePreview";

const user = {
  display_name: "test-user",
  username: "testuser",
  url: "https://google.com",
  id: 1,
  images: {}
};

test("UserProfilePreview renders correctly", () => {
  const component = shallow(<UserProfilePreview user={user} />);
  expect(component).toMatchSnapshot();
});
