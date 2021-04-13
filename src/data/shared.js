function addWithID(map, item, key) {
  map.set(item[key], item);
}

function mapKeyedBy(key, items) {
  const map = new Map();
  for (const item of items) {
    map.set(item[key], item);
  }
  return map;
}

exports.mapKeyedBy = mapKeyedBy;
exports.addWithID = addWithID;
