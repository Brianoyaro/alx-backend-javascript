namespace Subjects {
    export interface Teacher {
        //firstName: string,
        //lastName: string,
        experienceTeachingJava?: number,
    }
    class Java extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Java"
        }
        public getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher}`;
            } else {
                return "No available teacher"
            }
        }
    }
}