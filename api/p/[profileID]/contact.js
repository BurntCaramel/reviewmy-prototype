const { htmlWriter, ProfileContactPage } = require("../../../src/view");

function handleRequest(req, res) {
  htmlWriter(res)(ProfileContactPage());
}

module.exports = handleRequest;
