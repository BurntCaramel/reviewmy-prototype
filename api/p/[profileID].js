const { htmlWriter, ProfilePage } = require("../../src/view");
const { profiles, reviewsByProfileID } = require("../../src/data");

function handleRequest(req, res) {
  const { profileID } = req.query;
  const profile = profiles.get(profileID);
  const reviews = reviewsByProfileID.get(profileID);
  htmlWriter(res)(ProfilePage({ profile, reviews }));
}

module.exports = handleRequest;
