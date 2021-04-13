const { htmlWriter, ProfileMapPage } = require("../../../src/view");
const { profiles, reviewsByProfileID } = require("../../../src/data");

function handleRequest(req, res) {
  const { profileID } = req.query;
  const profile = profiles.get(profileID);
  const reviews = reviewsByProfileID.get(profileID);
  htmlWriter(res)(ProfileMapPage({ profile, reviews }));
}

module.exports = handleRequest;
