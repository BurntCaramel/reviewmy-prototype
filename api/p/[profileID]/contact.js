const { htmlWriter, ProfileContactPage } = require("../../../src/view");
const { profiles } = require("../../../src/data");

function handleRequest(req, res) {
  const { profileID } = req.query;
  const profile = profiles.get(profileID);
  htmlWriter(res)(ProfileContactPage({ profile }));
}

module.exports = handleRequest;
