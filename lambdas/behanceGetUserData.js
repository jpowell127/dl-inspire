// copy of lambda function in aws for your review,
// this file is not actually used but the lambda function you can't see is

const fetch = require("node-fetch");

exports.handler = (event, context, callback) => {
  const keyword = event.keyword;
  const url =
    "https://api.behance.net/v2/users?q=" +
    keyword +
    "&client_id=" +
    process.env.CLIENT_ID;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(users => callback(null, users));
};
