import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import { Menu, Icon, Header } from "semantic-ui-react";

export default function MenuBar({
  handleSearchTermChange,
  getUsers,
  onKeyPress
}) {
  return (
    <Menu inverted size="small">
      <Menu.Item>
        <Header as="h1" color="pink">
          <Icon name="behance" />
          <Header.Content>Search</Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Search
            handleSearchTermChange={handleSearchTermChange}
            getUsers={getUsers}
            onKeyPress={onKeyPress}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

Search.MenuBar = {
  getUsers: PropTypes.func.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired
};
