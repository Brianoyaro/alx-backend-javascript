export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let count = 1;
  const { length } = reportWithIterator;
  for (const value of reportWithIterator) {
    string += value;
    if (count !== length) {
      string += ' | ';
      count += 1;
    }
  }
  return string;
}
