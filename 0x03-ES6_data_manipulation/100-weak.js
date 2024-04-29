export const weakMap = new WeakMap();
export const queryAPI = function (endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
};
