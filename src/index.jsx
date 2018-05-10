import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BEHANCE_GET_USER_DATA_LAMBDA_URL } from "../utilities/constants";
import Search from "./components/Search";
import UserProfilePreview from "./components/UserProfilePreview";
import { Dimmer, Loader, Card, Menu } from "semantic-ui-react";

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

  handleSearchTermChange(evt) {
    let searchTerm = evt.target.value;

    this.setState({
      searchTerm
    });
  }

  getUsers() {
    if (!this.state.searchTerm) {
      this.setState({ users: [] });
      return;
    }

    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_DATA_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ keyword: this.state.searchTerm })
    })
      .then(res => res.json())
      .then(result => {
        this.setState({ users: result.users, loading: false });
      })
      .catch(error => {
        this.setState({
          errors: error
        });
      });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <Menu inverted size="mini">
          <Menu.Item>
            <h1>Behance Search</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Search
                handleSearchTermChange={this.handleSearchTermChange}
                getUsers={this.getUsers}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {loading && (
          <Dimmer active>
            <Loader size="medium">Finding Users...</Loader>
          </Dimmer>
        )}
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
