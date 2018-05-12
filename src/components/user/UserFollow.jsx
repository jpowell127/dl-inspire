import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BEHANCE_GET_USER_FOLLOW_LAMBDA_URL } from "../../utilities/constants";
import { Dimmer, Loader, Modal, Header, Item, Tab } from "semantic-ui-react";

export default class UserFollow extends Component {
  state = {
    loading: false,
    followers: [],
    following: []
  };

  getUserFollow = (username, field) => {
    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_FOLLOW_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ user: username, field })
    })
      .then(res => res.json())
      .then(followings => {
        if (followings[field]) {
          this.setState({
            [field]: followings[field].slice(0, 10),
            loading: false
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(error => this.setState({ errors: error }));
  };

  componentDidMount() {
    const { username } = this.props;

    this.getUserFollow(username, "followers");
    this.getUserFollow(username, "following");
  }

  render() {
    const { followers, following, loading } = this.state;

    const panes = [
      {
        menuItem: "Followers",
        render: () => (
          <Tab.Pane>
            <Item.Group>
              {followers.map(follower => (
                <Item key={follower.id}>
                  <Item.Image size="mini" src={follower.images[50]} />
                  <Item.Content>
                    <Item.Header>
                      <a href={follower.url} target="_blank">
                        {follower.display_name}
                      </a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Following",
        render: () => (
          <Tab.Pane>
            <Item.Group>
              {following.map(follow => (
                <Item key={follow.id}>
                  <Item.Image size="mini" src={follow.images[50]} />
                  <Item.Content>
                    <Item.Header>
                      <a href={follow.url} target="_blank">
                        {follow.display_name}
                      </a>
                    </Item.Header>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
          </Tab.Pane>
        )
      }
    ];

    return (
      <Fragment>
        {loading && (
          <Modal.Content>
            <Dimmer active>
              <Loader size="medium">Loading...</Loader>
            </Dimmer>
          </Modal.Content>
        )}
        {!loading && <Tab panes={panes} />}
      </Fragment>
    );
  }
}

UserFollow.propTypes = {
  username: PropTypes.string.isRequired
};
