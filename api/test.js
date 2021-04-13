module.exports = function handler(req, res) {
  res.json({
    body: { works: true }
    //query: req.query,
    // cookies: req.cookies,
  });
};
