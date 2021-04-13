const { htmlWriter, ProfileReviewPage } = require("../../../../src/view");
const { profiles, reviewsByProfileID } = require("../../../../src/data");

function handleRequest(req, res) {
  const { profileID, reviewID } = req.query;
  const profile = profiles.get(profileID);
  const reviews = reviewsByProfileID.get(profileID);
  const review = reviews.get(reviewID);
  htmlWriter(res)(ProfileReviewPage({ profile, reviews }));
}

module.exports = handleRequest;
