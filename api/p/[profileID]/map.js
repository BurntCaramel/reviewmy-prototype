const { htmlWriter, ProfileMapPage } = require("../../src/view");

function handleRequest(req, res) {
  htmlWriter(res)(ProfileMapPage());
}

module.exports = handleRequest;
