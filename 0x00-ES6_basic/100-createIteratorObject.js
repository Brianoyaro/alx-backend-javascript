export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const values = Object.values(employees);
  const array = [];
  for (const value of values) {
    for (const val of value) {
      array.push(val);
    }
  }
  return array;
}
