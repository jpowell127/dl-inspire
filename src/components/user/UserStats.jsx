import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Statistic } from "semantic-ui-react";

function UserStats({ stats }) {
  const { followers, following, appreciations, views, comments } = stats;

  return (
    <Statistic.Group size="mini" widths="five">
      <Statistic color="red">
        <Statistic.Value>{followers}</Statistic.Value>
        <Statistic.Label size="mini">Followers</Statistic.Label>
      </Statistic>
      <Statistic color="orange">
        <Statistic.Value>{following}</Statistic.Value>
        <Statistic.Label>Following</Statistic.Label>
      </Statistic>
      <Statistic color="yellow">
        <Statistic.Value>{appreciations}</Statistic.Value>
        <Statistic.Label>Appreciations</Statistic.Label>
      </Statistic>
      <Statistic color="green">
        <Statistic.Value>{views}</Statistic.Value>
        <Statistic.Label>Views</Statistic.Label>
      </Statistic>
      <Statistic color="teal">
        <Statistic.Value>{comments}</Statistic.Value>
        <Statistic.Label>Comments</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
}

UserStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    appreciations: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
  }).isRequired
};

export default UserStats;
