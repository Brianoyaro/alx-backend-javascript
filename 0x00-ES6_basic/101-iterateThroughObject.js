export default function iterateThroughObject(reportWithIterator) {
  let string = "";
  let count = 1;
  let length = reportWithIterator.length;
  for (let val of reportWithIterator) {
    string += val;
    if (count !== length) {
      string += " | ";
      count += 1;
    };
  };
  return string;
}
