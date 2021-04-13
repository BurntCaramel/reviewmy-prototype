const { htmlWriter, ProfileReviewPage } = require("../../../../src/view");
const { profiles, reviewsByProfileID } = require("../../../../src/data");

function handleRequest(req, res) {
  const { profileID, reviewID } = req.query;
  console.log({ profileID, reviewID });
  const profile = profiles.get(profileID);
  const reviews = reviewsByProfileID.get(profileID);
  const review = reviews.get(reviewID);

  if (review === undefined) {
    res.writeHead(404, "Not Found");
    res.end("Review not found");
    return;
  }

  htmlWriter(res)(ProfileReviewPage({ profile, reviews }));
}

module.exports = handleRequest;
