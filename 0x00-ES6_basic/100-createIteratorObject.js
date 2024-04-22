export default function createIteratorObject(report) {
  let employees = report.allEmployees;
  let values = Object.values(employees);
  let array = [];
  for (let value of values) {
    for (let val of value) {
      array.push(val);
    };
  };
  return array;
}
