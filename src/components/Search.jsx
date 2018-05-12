import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "semantic-ui-react";

export default function Search({
  getUsers,
  handleSearchTermChange,
  onKeyPress
}) {
  return (
    <Input
      inverted
      size="large"
      action={{
        color: "pink",
        icon: "search",
        onClick: getUsers
      }}
      placeholder="Search Behance"
      onChange={handleSearchTermChange}
      onKeyPress={onKeyPress}
    />
  );
}

Search.propTypes = {
  getUsers: PropTypes.func.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired
};
