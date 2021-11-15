export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export function getValueByKey(object, key) {
  return object[key];
}
