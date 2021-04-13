const htmlEnStart = `<!doctype html><html lang=en><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1.0">`;

function renderHTML(contents) {
  const strings = Array.from(contents);
  strings.unshift(htmlEnStart);
  return strings.join("");
}

exports.renderHTML = renderHTML;
// export { renderHTML };
