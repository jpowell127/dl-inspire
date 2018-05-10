import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function UserProfilePreview({ user }) {
  const { first_name, last_name, username, url } = user;
  const image = user.images[50];
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={image}
          alt={`Image of ${username}`}
        />
        <Card.Header>{first_name + " " + last_name}</Card.Header>
        <Card.Meta>{username}</Card.Meta>
        <Card.Description>
          <a href={url} target="_blank">
            {url}
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default UserProfilePreview;
