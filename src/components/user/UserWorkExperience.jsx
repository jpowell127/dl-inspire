import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BEHANCE_GET_USER_WORK_EXPERIENCE_LAMBDA_URL } from "../../../utilities/constants";
import { Dimmer, Loader, Modal, Header, Item } from "semantic-ui-react";

export class UserWorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      experiences: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_WORK_EXPERIENCE_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ user: this.props.username })
    })
      .then(res => res.json())
      .then(result => result.work_experience)
      .then(experiences => this.setState({ experiences, loading: false }))
      .catch(error => this.setState({ errors: error }));
  }

  render() {
    const { experiences, loading } = this.state;
    return (
      <Fragment>
        {loading && (
          <Dimmer active>
            <Loader size="medium">Loading...</Loader>
          </Dimmer>
        )}
        {experiences &&
          experiences.length > 0 && (
            <Modal.Content>
              <Header as="h3" size="medium">
                Work Experience
              </Header>
              <Item.Group divided>
                {experiences.map(experience => (
                  <Item>
                    <Item.Content>
                      <Item.Header>{experience.position}</Item.Header>
                      <Item.Meta>{experience.organization}</Item.Meta>
                      <Item.Meta>{experience.location}</Item.Meta>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            </Modal.Content>
          )}
      </Fragment>
    );
  }
}

UserWorkExperience.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserWorkExperience;
