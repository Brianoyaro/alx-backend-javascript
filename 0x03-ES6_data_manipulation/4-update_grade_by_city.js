export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // get all student from location === city parameter
  const filteredArray = studentList.filter((val) => val.location === city);
  for (const val of newGrades) {
    // for every filteredArray in newGrades, add an extra attribute of grade with corresponding grade in newGrades
    filteredArray.map((value) => {
      if (value.id === val.studentId) {
        value.grade = val.grade;
      }
    });
    // for every elemt lacking grade place grade: N/A
    filteredArray.map((value) => {
      if (!('grade' in value)) {
        value.grade = 'N/A';
      }
    });
  }
  return filteredArray;
}
