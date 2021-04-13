const { htmlWriter, ProfilePage, ProfileMapPage, ProfileContactPage } = require("./view");
const { profiles } = require("./data");

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

  const [,id] = path.match(/\/p\/([\d]+)/);
  const profile = profiles.get(id);

  if (profile === undefined) {
    render(["<h1>Not found</h1>"]);
    return;
  }

  const dynamicPath = path.replace(/\/p\/[\d]+/, "/p/:id");

  if (dynamicPath === "/api/p/:id") {
    render(ProfilePage({ profile }));
  } else if (dynamicPath === "/api/p/:id/map") {
    render(ProfileMapPage({ profile }));
  } else if (dynamicPath === "/api/p/:id/contact") {
    render(ProfileContactPage({ profile }));
  } else {
    res.end("Hello World!" + JSON.stringify(path));
  }
}

exports.handleRequest = handleRequest;
