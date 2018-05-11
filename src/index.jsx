import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import MenuBar from "./components/MenuBar";
import UserProfilePreview from "./components/user/UserProfilePreview";
import { BEHANCE_GET_USER_DATA_LAMBDA_URL } from "../utilities/constants";
import { Dimmer, Loader, Card } from "semantic-ui-react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      searchTerm: "",
      users: [],
      errors: []
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleSearchTermChange(e) {
    let searchTerm = e.target.value;

    this.setState({
      searchTerm
    });
  }

  getUsers() {
    const { searchTerm } = this.state;

    if (!searchTerm) {
      this.setState({ users: [] });
      return;
    }

    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_DATA_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ keyword: this.state.searchTerm })
    })
      .then(res => res.json())
      .then(result => result.users)
      .then(users => this.setState({ users, loading: false }))
      .catch(error => this.setState({ errors: error }));
  }

  render() {
    const { users, loading, selectedUser } = this.state;
    return (
      <Fragment>
        {loading && (
          <Dimmer active>
            <Loader size="medium">Finding Users...</Loader>
          </Dimmer>
        )}
        <MenuBar
          handleSearchTermChange={this.handleSearchTermChange}
          getUsers={this.getUsers}
        />
        {users.length > 0 && (
          <Card.Group centered>
            {users.map(user => (
              <UserProfilePreview key={user.id} user={user} />
            ))}
          </Card.Group>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
