/// <reference path="Teacher.ts" >/
namespace Subjects {
    export class Subject {
        public teacher: Teacher;
        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }
        public set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}