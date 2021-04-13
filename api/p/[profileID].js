const { renderHTML, ProfilePage } = require("../../src/view");

function handleRequest(req, res) {
  res.write(renderHTML(ProfilePage()));
  res.end();
}

module.exports = handleRequest;
