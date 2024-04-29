export default function getStudentIdSum(studList) {
  return studList.reduce((total, val) => total + val.id, 0);
}
