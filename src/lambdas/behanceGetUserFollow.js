// copy of lambda function in aws for your review,
// this file is not actually used but the lambda function you can't see is

const fetch = require("node-fetch");

exports.handler = (event, context, callback) => {
  const user = event.user;
  const field = event.field;
  const url =
    "https://api.behance.net/v2/users/" +
    user +
    "/" +
    field +
    "?client_id=" +
    process.env.CLIENT_ID;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(field => callback(null, field));
};
