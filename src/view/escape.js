const map = { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#039" };
function escapeToHTML(input) {
  if (Array.isArray(input)) {
    input = input.join("");
  }

  // return input.replace(/[&<>"']/g, (s) => `&${map[s]};`);
  return input.replace(/[&<>"]/g, (s) => `&${map[s]};`);
}

exports.escapeToHTML = escapeToHTML;
