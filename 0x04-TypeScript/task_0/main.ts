interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}
const studentOne: Student = {
    firstName: 'One_f',
    lastName: 'one_l',
    age: 10,
    location: 'location_one'
};
const studentTwo: Student = {
    firstName: 'Two_f',
    lastName: 'Two_l',
    age: 10,
    location: 'location_Two'
};
const studentsList: Student[] = [studentOne, studentTwo];
const table = document.createElement('table');
studentsList.forEach((stdent) => {
    const row = document.createElement('tr');
    const fName = document.createElement('td');
    fName.innerHTML = stdent.firstName;
    row.appendChild(fName);
    const loc = document.createElement('td');
    loc.innerHTML = stdent.location;
    row.appendChild(loc);
    table.appendChild(row);
})
document.body.appendChild(table);