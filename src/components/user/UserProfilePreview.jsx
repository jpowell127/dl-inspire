import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import UserProfileModal from "./UserProfileModal";

export default function UserProfilePreview({ user }) {
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

UserProfileModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    display_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    images: PropTypes.object.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      appreciations: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
