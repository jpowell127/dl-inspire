import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "semantic-ui-react";

function Search({ getUsers, handleSearchTermChange }) {
  return (
    <div>
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
      />
    </div>
  );
}

Search.propTypes = {
  getUsers: PropTypes.func.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired
};

export default Search;
