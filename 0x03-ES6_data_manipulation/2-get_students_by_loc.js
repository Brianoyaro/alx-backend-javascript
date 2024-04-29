export default function getStudentsByLocation(studentsList, loc) {
  return studentsList.filter((val) => val.location === loc);
}
