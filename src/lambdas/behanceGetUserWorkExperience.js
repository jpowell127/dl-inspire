// copy of lambda function in aws for your review,
// this file is not actually used but the lambda function you can't see is

const fetch = require("node-fetch");

exports.handler = (event, context, callback) => {
  const user = event.user;
  const url =
    "https://www.behance.net/v2/users/" +
    user +
    "/work_experience?client_id=" +
    process.env.CLIENT_ID;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(projects => callback(null, projects));
};
