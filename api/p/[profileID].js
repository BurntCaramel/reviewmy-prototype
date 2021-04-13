const { htmlWriter, ProfilePage } = require("../../src/view");

function handleRequest(req, res) {
  htmlWriter(res)(ProfilePage());
}

module.exports = handleRequest;
