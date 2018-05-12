import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import MenuBar from "./components/MenuBar";
import UserProfilePreview from "./components/user/UserProfilePreview";
import { BEHANCE_GET_USER_DATA_LAMBDA_URL } from "./utilities/constants";
import { Dimmer, Loader, Card, Message } from "semantic-ui-react";

export default class App extends Component {
  state = {
    loading: false,
    searchTerm: "",
    users: [],
    errors: [],
    showMessage: false
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.getUsers();
    }
  };

  handleSearchTermChange = e => {
    let searchTerm = e.target.value;

    this.setState({
      searchTerm,
      showMessage: false
    });
  };

  getUsers = () => {
    const { searchTerm } = this.state;

    if (!searchTerm) {
      this.setState({ users: [], showMessage: false });
      return;
    }

    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_DATA_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ keyword: this.state.searchTerm })
    })
      .then(res => res.json())
      .then(result => result.users)
      .then(users => {
        if (users.length > 0) {
          this.setState({ users, loading: false, showMessage: false });
        } else {
          this.setState({ users, loading: false, showMessage: true });
        }
      })
      .catch(error => this.setState({ errors: error }));
  };

  render() {
    const {
      users,
      loading,
      selectedUser,
      searchTerm,
      showMessage
    } = this.state;

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
          onKeyPress={this.onKeyPress}
        />
        {!loading &&
          users.length > 0 && (
            <Card.Group centered>
              {users.map(user => (
                <UserProfilePreview key={user.id} user={user} />
              ))}
            </Card.Group>
          )}
        {showMessage && (
          <Message negative>
            <Message.Header>
              We're sorry we can't find any users named {searchTerm}
            </Message.Header>
            <p>Please try another search</p>
          </Message>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
