//const { rejects } = require('node:assert');
const fs = require('node:fs');
//const { resolve } = require('node:path');
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                throw new Error('Cannot load the database')
                reject();
            } else {
                const lines = data.split('\n').slice(1);
                let count = 0;
                for (let line of lines) {
                    if (line) {
                        count += 1;
                    }
                }
                console.log(`Number of students: ${count}`)
                // this part is pending
                const studentsRows = data.split('\n').slice(1);
                const students = studentsRows.map((row) => {
                    const data = row.split(',')
                    return {
                        firstname: data[0],
                        lastname: data[1],
                        age: data[2],
                        field: data[3]
                    }
                })
                // group the students using their field of study
                let groups = {};
                students.forEach((student) => {
                    // if the student's field doesnt exists initialize it
                    if(!groups[student.field]) {
                        groups[student.field] = [];
                    }
                    // push student's first name to the list
                    groups[student.field].push(student.firstname)
                });
                // console.log(groups)
                for (let group in groups) {
                    const count = groups[group].length;
                    const studentGroup = groups[group].join(', ')
                    if (studentGroup) {
                        console.log(`Number of students in ${group}: ${count}. List: ${studentGroup}`);
                    }
                }
                resolve();
            }
        })
    })
}
module.exports = countStudents;