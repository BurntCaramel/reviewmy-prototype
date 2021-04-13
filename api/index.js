function handleRequest(req, res) {
  res.writeHead(302, {
    Location: "/api/p/1",
  });
  res.end();
}

module.exports = handleRequest;
