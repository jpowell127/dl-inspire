import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import UserWorkExperience from "./UserWorkExperience";
import UserProjects from "./UserProjects";
import { Button, Header, Modal, Image, Grid } from "semantic-ui-react";

function UserProfileModal({ user }) {
  const { id, display_name, username, occupation, company, location } = user;
  const image = user.images[100];

  const button = (
    <Button fluid inverted color="pink">
      View User
    </Button>
  );
  return (
    <Modal closeIcon trigger={button}>
      <Header as="h1" size="huge">
        <Image spaced="right" floated="right" rounded src={image} />
        {display_name} (aka {username})
        <Header.Subheader size="medium">
          {company || occupation}
        </Header.Subheader>
        <Header.Subheader size="medium">{location}</Header.Subheader>
      </Header>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <UserProjects userId={id} />
          </Grid.Column>
          <Grid.Column>
            <UserWorkExperience username={username} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal>
  );
}

UserProfileModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    display_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    images: PropTypes.object.isRequired
  }).isRequired
};

export default UserProfileModal;
