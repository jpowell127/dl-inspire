import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import UserProfileModal from "../../src/components/user/UserProfileModal";

test("UserProfileModal renders correctly", () => {
  const user = {
    id: 1,
    display_name: "test-user",
    username: "testuser",
    occupation: "designer",
    company: "test co",
    location: "somewhere",
    images: {},
    stats: {
      followers: 1,
      following: 1,
      appreciations: 1,
      views: 1,
      comments: 1
    }
  };
  const component = shallow(<UserProfileModal user={user} />);
  expect(component).toMatchSnapshot();
});
