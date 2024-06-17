//const { listen } = require('express/lib/application');
const http = require('http');

//const { rejects } = require('node:assert');
const fs = require('node:fs');
//const { resolve } = require('node:path');
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'))
            } else {
                const lines = data.split('\n').slice(1);
                let count = 0;
                for (let line of lines) {
                    if (line) {
                        count += 1;
                    }
                }
                message = `Number of students: ${count}`
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
                        message += `Number of students in ${group}: ${count}. List: ${studentGroup}\n`;
                    }
                }
                resolve(message);
            }
        })
    })
}

const app = http.createServer(function(req, res) {
    let url = req.url;
    if (url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    } else if (url === '/students') {
        res.write('This is the list of our students\n');
        const path = process.argv[2];
        countStudents(path).then((message) => res.end(message))
    }
})
app.listen(1245)
module.exports = app