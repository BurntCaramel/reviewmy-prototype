const { htmlWriter, ProfilePage, ProfileMapPage, ProfileContactPage, ProfileReviewPage } = require("./view");
const { profiles, reviewsByProfileID } = require("./data");

/**
 * 
 * @param {import("http").ClientRequest} req 
 * @param {import("http").ServerResponse} res 
 */
function handleRequest(req, res) {
  const path = req.url;

  const render = htmlWriter(res);

  if (path === "/") {
    res.writeHead(302, {
      Location: "/api/p/1"
    });
    res.end();
    return;
  }

  const [,profileID] = path.match(/\/p\/([\d]+)/) ?? [];
  const [,reviewID] = path.match(/\/reviews\/([\d]+)/) ?? [];
  const profile = profiles.get(profileID);
  const reviews = reviewsByProfileID.get(profileID);

  const reviewNotFound = typeof reviewID === 'string' && (reviews === undefined || !reviews.has(reviewID));

  if (profile === undefined || reviewNotFound) {
    render(["<h1>Not found</h1>"]);
    return;
  }

  let dynamicPath = path;
  dynamicPath = dynamicPath.replace(/\/p\/[\d]+/, "/p/:profileID");
  dynamicPath = dynamicPath.replace(/\/reviews\/[\d]+/, "/reviews/:reviewsID");

  if (dynamicPath === "/api/p/:profileID") {
    render(ProfilePage({ profile, reviews }));
  } else if (dynamicPath === "/api/p/:profileID/map") {
    render(ProfileMapPage({ profile, reviews }));
  } else if (dynamicPath === "/api/p/:profileID/contact") {
    render(ProfileContactPage({ profile, reviews }));
  } else if (dynamicPath === "/api/p/:profileID/reviews/:reviewsID") {
    const review = reviews.get(reviewID);
    render(ProfileReviewPage({ profile, review }));
  } else {
    res.end("Hello World!" + JSON.stringify(path));
  }
}

exports.handleRequest = handleRequest;
