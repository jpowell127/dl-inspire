import React from "react";
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
        placeholder="Search for Behance Users"
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default Search;
