const { renderHTML, ProfilePage } = require("./view");

function handleRequest(req, res) {
  const path = req.url;
  console.log("url", req.url, "path", req.path, "host", req.host);

  if (path === "/") {
    res.writeHead(302, {
      Location: "/p/1"
    });
    res.end();
    return;
  }

  if (path === "/p/1") {
    res.write(
      renderHTML(
        ProfilePage({
          baseURL: "/"
        })
      )
    );
    res.end();
  } else {
    res.write("Hello World!" + JSON.stringify(path)); //write a response to the client
    res.end(); //end the response
  }
}

exports.handleRequest = handleRequest;
