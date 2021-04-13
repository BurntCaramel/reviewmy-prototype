const htmlEnStart = `<!doctype html><html lang=en><meta charset=utf-8><meta name=viewport content="width=device-width, initial-scale=1.0">`;

/**
 * 
 * @param {Iterable<string>} contents 
 */
function renderHTML(contents) {
  const strings = Array.from(contents);
  strings.unshift(htmlEnStart);
  return strings.join("");
}

/**
 * 
 * @param {Iterable<string>} contents 
 * @param {import("stream").Writable} writer 
 */
function renderHTMLInto(contents, writer) {
  writer.write(htmlEnStart);
  for (const chunk of contents) {
    writer.write(chunk);
  }
  writer.end();
}

/**
 * 
 * @param {import("stream").Writable} writer 
 * @returns {(contents: Iterable<string>) => void}
 */
function htmlWriter(writer) {
  return (contents) => {
    writer.write(htmlEnStart);
    for (const chunk of contents) {
      writer.write(chunk);
    }
    writer.end();
  }
}

exports.renderHTML = renderHTML;
exports.renderHTMLInto = renderHTMLInto;
exports.htmlWriter = htmlWriter;
