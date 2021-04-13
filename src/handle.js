const { renderHTML, renderHTMLInto, htmlWriter, ProfilePage, ProfileMapPage, ProfileContactPage } = require("./view");

/**
 * 
 * @param {import("http").ClientRequest} req 
 * @param {import("http").ServerResponse} res 
 * @returns 
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

  if (path === "/api/p/1") {
    render(ProfilePage());
  } else if (path === "/api/p/1/map") {
    render(ProfileMapPage());
  } else if (path === "/api/p/1/contact") {
    render(ProfileContactPage());
  } else {
    res.end("Hello World!" + JSON.stringify(path));
  }
}

exports.handleRequest = handleRequest;
