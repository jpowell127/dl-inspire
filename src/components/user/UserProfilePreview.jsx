import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import UserProfileModal from "./UserProfileModal";

function UserProfilePreview({ user }) {
  const { display_name, username, url, id } = user;
  const image = user.images[50];
  return (
    <Card color="pink">
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={image}
          alt={`Image of ${username}`}
        />
        <Card.Header>{display_name}</Card.Header>
        <Card.Meta>{username}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <UserProfileModal user={user} />
      </Card.Content>
    </Card>
  );
}

UserProfilePreview.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.object.isRequired
  }).isRequired
};

export default UserProfilePreview;
