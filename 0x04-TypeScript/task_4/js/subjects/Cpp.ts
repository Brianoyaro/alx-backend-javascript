namespace Subjects {
    export interface Teacher {
        //firstName: string,
        //lastName: string,
        experienceTeachingC?: number,
    }
    class Cpp extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp"
        }
        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher}`;
            } else {
                return "No available teacher"
            }
        }
    }
}