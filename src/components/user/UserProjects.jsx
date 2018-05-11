import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BEHANCE_GET_USER_PROJECTS_LAMBDA_URL } from "../../../utilities/constants";
import { Dimmer, Loader, Modal, Header, Item } from "semantic-ui-react";

export class UserProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      projects: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(BEHANCE_GET_USER_PROJECTS_LAMBDA_URL, {
      method: "POST",
      body: JSON.stringify({ user: this.props.userId })
    })
      .then(res => res.json())
      .then(result => result.projects.slice(0, 5))
      .then(projects => this.setState({ projects, loading: false }))
      .catch(error => this.setState({ errors: error }));
  }

  render() {
    const { projects, loading } = this.state;
    return (
      <Fragment>
        {loading && (
          <Modal.Content>
            <Dimmer active>
              <Loader size="medium">Loading...</Loader>
            </Dimmer>
          </Modal.Content>
        )}
        {projects &&
          projects.length > 0 && (
            <Modal.Content>
              <Header as="h3" size="large">
                Projects
              </Header>
              <Item.Group divided>
                {projects.map(project => (
                  <Item key={project.id}>
                    <Item.Image size="tiny" src={project.covers[115]} />
                    <Item.Content>
                      <Item.Header>
                        <a href={project.url} target="_blank">
                          {project.name}
                        </a>
                      </Item.Header>
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

UserProjects.propTypes = {
  userId: PropTypes.number.isRequired
};

export default UserProjects;
