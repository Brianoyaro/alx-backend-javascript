export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const array = [];
  const array2 = [];
  set.forEach((val) => {
    if (val.startsWith(startString)) {
      array.push(val);
    }
  });
  array.forEach((val) => {
    array2.push(val.slice(startString.length));
  });
  // return '-'.join(array2);
  return array2.join('-');
}
