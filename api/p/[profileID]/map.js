// const { renderHTML, ProfilePage } = require("../../../src/view");

function handleRequest(req, res) {
  res.write("<h1>Map!</h1>");
  res.end();
}

module.exports = handleRequest;
